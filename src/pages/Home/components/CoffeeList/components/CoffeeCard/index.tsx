import { ShoppingCartSimple } from "phosphor-react";
import {
  ButtonCart,
  CardActions,
  CardBuy,
  CoffeeCardContainer,
  CoffeeCardDetails,
  CoffeeTags,
} from "./styles";
import { Tag, TagType } from "../Tag";
import { InputQuantity } from "../../../../../../components/InputQuantity";

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
  const priceFormatted = coffee.price.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
  });

  return (
    <CoffeeCardContainer>
      <CoffeeCardDetails>
        <img src={coffee.image} />
        <CoffeeTags>
          {coffee.tags.map((tag) => (
            <Tag key={tag.name} name={tag.name} />
          ))}
        </CoffeeTags>
        <h3>{coffee.name}</h3>
        <p>{coffee.description}</p>
      </CoffeeCardDetails>
      <CardBuy>
        <span>
          <small>R$</small> {priceFormatted}
        </span>

        <CardActions>
          <InputQuantity />
          <ButtonCart type="button">
            <ShoppingCartSimple size={22} weight="fill" />
          </ButtonCart>
        </CardActions>
      </CardBuy>
    </CoffeeCardContainer>
  );
}
