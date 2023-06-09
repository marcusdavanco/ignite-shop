import Link from "next/link";
import { MinicartContainer } from "../styles/components/minicart";
import { ImageContainer, ProductContainer } from "../styles/pages/product";

export function Minicart() {
  return (
    <MinicartContainer>
      <button>X</button>
      <h2>Sacola de compras</h2>
      <section>
        <ProductContainer>
          <ImageContainer></ImageContainer>
          <Link href={""}>Camiseta Beyond the Limits</Link>
          <span>R$ 79,90</span>
          <button>Remover</button>
        </ProductContainer>
        <ProductContainer>
          <ImageContainer></ImageContainer>
          <Link href={""}>Camiseta Beyond the Limits</Link>
          <span>R$ 79,90</span>
          <button>Remover</button>
        </ProductContainer>
        <ProductContainer>
          <ImageContainer></ImageContainer>
          <Link href={""}>Camiseta Beyond the Limits</Link>
          <span>R$ 79,90</span>
          <button>Remover</button>
        </ProductContainer>
      </section>
      <section>
        <table>
          <tr>
            <th>Quantidade</th>
            <td>3 itens</td>
          </tr>
          <tr>
            <th>Valor total</th>
            <td>R$ 270,00</td>
          </tr>
        </table>
        <button>Finalizar compra</button>
      </section>
    </MinicartContainer>
  );
}
