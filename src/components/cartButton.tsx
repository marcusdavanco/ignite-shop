import { Handbag } from "phosphor-react";
import { CartButtonContainer } from "../styles/components/cartButton";
import { useShoppingCart } from "use-shopping-cart";

export function CartButton() {
  const { cartCount } = useShoppingCart();

  return (
    <CartButtonContainer>
      {cartCount > 0 && <span>{cartCount}</span>}
      <Handbag size={24} color={"#c4c4cc"} />
    </CartButtonContainer>
  );
}
