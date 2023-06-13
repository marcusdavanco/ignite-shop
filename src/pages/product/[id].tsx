import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";
import { GetStaticPaths, GetStaticProps } from "next";
import { stripe } from "../../lib/stripe";
import Stripe from "stripe";
import Image from "next/image";
import Head from "next/head";
import { useShoppingCart } from "use-shopping-cart";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    formattedPrice: string;
    description: string;
    defaultPriceId: string;
  };
}

export default function Product({ product }: ProductProps) {
  const { addItem } = useShoppingCart();

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt=""></Image>
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.formattedPrice}</span>

          <p>{product.description}</p>
          <button
            onClick={() =>
              addItem({
                name: product.name,
                id: product.id,
                price: product.price,
                price_id: product.defaultPriceId,
                currency: "BRL",
                image: product.imageUrl,
              })
            }
          >
            Comprar agora
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "prod_O2QoBGNsOwC1t4" } }],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount / 100,
        formattedPrice: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};
