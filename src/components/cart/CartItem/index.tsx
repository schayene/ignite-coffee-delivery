import { Trash } from "phosphor-react";
import { Actions, CartItemContainer, Details, Info } from "./styles";
import { InputQuantity } from "../../InputQuantity";
import { Button } from "../../Button";

export interface CartItemType {
  id: number;
  name: string;
  image: string;
  quantity: number;
  price: number;
}

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const priceFormatted = (item.price * item.quantity).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <CartItemContainer>
      <Info>
        <img src={item.image} />
        <Details>
          <h3>{item.name}</h3>
          <Actions>
            <InputQuantity />
            <Button type="button">
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
