import Link from "next/link";
import {
  MinicartContainer,
  ImageContainer,
  ProductContainer,
} from "../styles/components/minicart";
import { X } from "phosphor-react";

export function Minicart() {
  return (
    <MinicartContainer>
      <header>
        <button>
          <X size={24} color="#8d8d89" />
        </button>
        <h2>Sacola de compras</h2>
      </header>
      <section>
        <ProductContainer>
          <ImageContainer></ImageContainer>
          <div>
            <Link href={""}>Camiseta Beyond the Limits</Link>
            <span>R$ 79,90</span>
            <button>Remover</button>
          </div>
        </ProductContainer>
        <ProductContainer>
          <ImageContainer></ImageContainer>
          <div>
            <Link href={""}>Camiseta Beyond the Limits</Link>
            <span>R$ 79,90</span>
            <button>Remover</button>
          </div>
        </ProductContainer>
        <ProductContainer>
          <ImageContainer></ImageContainer>
          <div>
            <Link href={""}>Camiseta Beyond the Limits</Link>
            <span>R$ 79,90</span>
            <button>Remover</button>
          </div>
        </ProductContainer>
      </section>
      <footer>
        <table>
          <tbody>
            <tr>
              <th>Quantidade</th>
              <td>3 itens</td>
            </tr>
            <tr>
              <th>Valor total</th>
              <td>R$ 270,00</td>
            </tr>
          </tbody>
        </table>
        <button>Finalizar compra</button>
      </footer>
    </MinicartContainer>
  );
}
