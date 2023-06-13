import Link from "next/link";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import Image from "next/image";
import Head from "next/head";

interface SuccessProps {
  customerName: string;
  products: {
    name: string;
    imageUrl: string;
  }[];
}

export default function Success({ customerName, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        {products.length === 1 && <h1>Compra efetuada!</h1>}
        <section className={products.length > 1 ? "multiple" : ""}>
          {products.map((product) => (
            <ImageContainer>
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={130}
                height={130}
              />
            </ImageContainer>
          ))}
        </section>
        {products.length !== 1 && <h1>Compra efetuada!</h1>}
        <p>
          Uhuul <strong>{customerName}</strong>, sua{" "}
          <strong>
            {products.length === 1
              ? products[0].name
              : `compra de ${products.length} camisetas`}
          </strong>{" "}
          já está a caminho da sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = String(query.session_id);

  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details.name;
  const products = session.line_items.data;

  console.log("line_items", session.line_items);

  return {
    props: {
      customerName,
      products: products.map((product) => ({
        name: product.description,
        imageUrl: (product.price.product as Stripe.Product).images[0],
      })),
    },
  };
};
