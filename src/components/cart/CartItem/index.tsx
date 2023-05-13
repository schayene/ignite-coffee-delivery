import { Trash } from "phosphor-react";
import { Actions, CartItemContainer, Details, Info } from "./styles";
import { InputQuantity } from "../../InputQuantity";
import { Button } from "../../Button";
import { useContext } from "react";
import { CartContext, CartItemType } from "../../../contexts/CartContext";
import { getFormattedPrice } from "../../../helpers/formatHelper";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantityOfACartItem, removeItemFromCart } =
    useContext(CartContext);

  const priceFormatted = getFormattedPrice(item.price * item.quantity);

  function changeQuantity(quantity: number): void {
    updateQuantityOfACartItem(item.id, quantity);
  }

  function handleRemoveItemFromCart() {
    removeItemFromCart(item.id);
  }

  return (
    <CartItemContainer>
      <Info>
        <img src={item.image} />
        <Details>
          <h3>{item.name}</h3>
          <Actions>
            <InputQuantity
              quantity={item.quantity}
              onChangeQuantity={changeQuantity}
            />
            <Button type="button" onClick={handleRemoveItemFromCart}>
              <Trash size={16} />
              Remover
            </Button>
          </Actions>
        </Details>
      </Info>
      <span>{priceFormatted}</span>
    </CartItemContainer>
  );
}
