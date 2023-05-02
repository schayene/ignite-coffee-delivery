import { Minus, Plus } from "phosphor-react";
import { InputQuantityContainer } from "./styles";

interface InputQuantityProps {
  quantity?: number;
}

export function InputQuantity({ quantity = 1 }: InputQuantityProps) {
  return (
    <InputQuantityContainer>
      <button type="button">
        <Minus size={14} weight="bold" />
      </button>
      <input type="number" value={quantity} step={1} min={1} />
      <button type="button">
        <Plus size={14} weight="bold" />
      </button>
    </InputQuantityContainer>
  );
}
