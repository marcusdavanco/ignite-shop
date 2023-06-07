import { useRouter } from "next/router";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";

export default function Product() {
  const { query } = useRouter();
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,99</span>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit eum magnam eaque sit excepturi natus omnis vel, dolorem
          officia eos, dolor perspiciatis, assumenda similique aspernatur porro
          asperiores facere earum doloremque?
        </p>
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
