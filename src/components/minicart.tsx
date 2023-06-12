import Link from "next/link";
import {
  MinicartContainer,
  ImageContainer,
  ProductContainer,
} from "../styles/components/minicart";
import { X } from "phosphor-react";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";

export function Minicart() {
  const { totalPrice, cartCount, cartDetails, removeItem } = useShoppingCart();

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState<boolean>(false);

  const cartItems = Object.values(cartDetails);

  async function handleClick() {
    try {
      setIsCreatingCheckoutSession(true);
      const response = await axios.post("/api/checkout", {
        cartItems,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      // Conectar com uma ferramenta de observabilidade/ (Datadog / Sentry)
      setIsCreatingCheckoutSession(false);
      alert("Falha ao redirecionar ao checkout");
    }
  }

  return (
    <MinicartContainer>
      <header>
        <button>
          <X size={24} color="#8d8d89" />
        </button>
        <h2>Sacola de compras</h2>
      </header>
      <section>
        {Object.entries(cartDetails).map(([, product]) => (
          <ProductContainer key={product.id}>
            <ImageContainer>
              <Image
                src={product.image}
                width={94}
                height={94}
                alt={product.name}
              />
            </ImageContainer>
            <div>
              <Link href={""}>{product.name}</Link>
              <span>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(product.price)}
              </span>
              <button onClick={() => removeItem(product.id)}>Remover</button>
            </div>
          </ProductContainer>
        ))}
      </section>
      <footer>
        <table>
          <tbody>
            <tr>
              <th>Quantidade</th>
              <td>
                {cartCount}{" "}
                {cartCount === 0 ? "itens" : cartCount > 1 ? "itens" : "item"}
              </td>
            </tr>
            <tr>
              <th>Valor total</th>
              <td>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(totalPrice)}
              </td>
            </tr>
          </tbody>
        </table>
        <button
          disabled={!cartCount || isCreatingCheckoutSession}
          onClick={handleClick}
        >
          Finalizar compra
        </button>
      </footer>
    </MinicartContainer>
  );
}
