import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { cartItems } = req.body;

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  if (!cartItems) {
    return res.status(400).json({ error: "Price not found." });
  }

  const cartItemsFormatted = cartItems.map((product) => ({
    price: product.price_id,
    quantity: product.quantity,
  })) as [];

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_URL}`,
    mode: "payment",
    line_items: cartItemsFormatted,
  });

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  });
}
