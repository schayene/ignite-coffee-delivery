import { Trash } from "phosphor-react";
import { Actions, CartItemContainer, Details, Info } from "./styles";
import { InputQuantity } from "../../InputQuantity";
import { Button } from "../../Button";
import { useContext } from "react";
import { CartContext, ItemCartType } from "../../../layouts/DefaultLayout";

interface CartItemProps {
  item: ItemCartType;
}

export function CartItem({ item }: CartItemProps) {
  const { setItemsCart } = useContext(CartContext);

  const priceFormatted = (item.price * item.quantity).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  function changeQuantity(quantity: number): void {
    setItemsCart((state) => {
      return state.map((itemCart: ItemCartType) => {
        if (itemCart.id === item.id) {
          return {
            ...itemCart,
            quantity,
          };
        }
        return itemCart;
      });
    });
  }

  function handleRemoveItemFromCart() {
    setItemsCart((state) => {
      return state.filter((itemCart: ItemCartType) => itemCart.id !== item.id);
    });
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
