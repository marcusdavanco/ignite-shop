import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import logoImg from "../assets/logo.svg";
import { Container, Header } from "../styles/pages/app";
import Image from "next/image";
import { CartProvider } from "use-shopping-cart";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      cartMode="checkout-session"
      currency="BRL"
      shouldPersist={true}
      stripe={process.env.STRIPE_PUBLIC_KEY}
    >
      <Container>
        <Header>
          <Image src={logoImg.src} width={130} height={85} alt="logo" />
        </Header>
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  );
}
