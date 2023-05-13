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
import { useContext, useState } from "react";
import {
  CartContext,
  ItemCartType,
} from "../../../../../../layouts/DefaultLayout";

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
  const [quantity, setQuantity] = useState(1);

  const { setItemsCart } = useContext(CartContext);

  const priceFormatted = coffee.price.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
  });

  function changeQuantity(quantity: number): void {
    setQuantity(quantity);
  }

  function handleAddItemToCart() {
    const newItem: ItemCartType = {
      id: coffee.id,
      name: coffee.name,
      price: coffee.price,
      image: coffee.image,
      quantity,
    };

    setItemsCart((state) => [...state, newItem]);

    changeQuantity(1);
  }

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
          <InputQuantity
            quantity={quantity}
            onChangeQuantity={changeQuantity}
          />
          <ButtonCart type="button" onClick={handleAddItemToCart}>
            <ShoppingCartSimple size={22} weight="fill" />
          </ButtonCart>
        </CardActions>
      </CardBuy>
    </CoffeeCardContainer>
  );
}
