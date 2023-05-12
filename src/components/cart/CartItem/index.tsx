import { Trash } from "phosphor-react";
import { Actions, CartItemContainer, Details, Info } from "./styles";
import { InputQuantity } from "../../InputQuantity";
import { Button } from "../../Button";
import { useContext } from "react";
import {
  CartContext,
  CartType,
  ItemCartType,
} from "../../../layouts/DefaultLayout";

interface CartItemProps {
  item: ItemCartType;
}

export function CartItem({ item }: CartItemProps) {
  const { cart, setCart } = useContext(CartContext);

  const priceFormatted = (item.price * item.quantity).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  function changeQuantity(quantity: number): void {
    setCart((state) => {
      return {
        itens: state.itens.map((itemCart) => {
          if (itemCart.id === item.id) {
            return {
              ...itemCart,
              quantity,
            };
          }
          return itemCart;
        }),
      };
    });
  }

  function handleRemoveItemFromCart() {
    setCart((state) => {
      return {
        itens: state.itens.filter((itemCart) => itemCart.id !== item.id),
      };
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
