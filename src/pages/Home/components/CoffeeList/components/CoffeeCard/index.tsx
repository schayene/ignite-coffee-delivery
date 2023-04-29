import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import {
  ButtonCart,
  CardActions,
  CardBuy,
  CoffeeCardContainer,
  CoffeeTags,
  InputQuantity,
} from "./styles";
import { Tag, TagType } from "../Tag";

export interface CoffeeInterface {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  tags: TagType[];
}

interface CoffeeCardProps {
  coffee: CoffeeInterface;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const priceFormatted = coffee.price.toFixed(2).toString().replace(".", ",");

  return (
    <CoffeeCardContainer>
      <img src={coffee.image} />
      <CoffeeTags>
        {coffee.tags.map((tag) => (
          <Tag key={tag.name} name={tag.name} />
        ))}
      </CoffeeTags>
      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>
      <CardBuy>
        <span>
          <small>R$</small> {priceFormatted}
        </span>

        <CardActions>
          <InputQuantity>
            <button type="button">
              <Minus size={14} weight="bold" />
            </button>
            <input type="number" defaultValue={1} step={1} min={1} />
            <button type="button">
              <Plus size={14} weight="bold" />
            </button>
          </InputQuantity>
          <ButtonCart type="button">
            <ShoppingCartSimple size={22} weight="fill" />
          </ButtonCart>
        </CardActions>
      </CardBuy>
    </CoffeeCardContainer>
  );
}
