import { Minus, Plus } from "phosphor-react";
import { InputQuantityContainer } from "./styles";

export function InputQuantity() {
  return (
    <InputQuantityContainer>
      <button type="button">
        <Minus size={14} weight="bold" />
      </button>
      <input type="number" defaultValue={1} step={1} min={1} />
      <button type="button">
        <Plus size={14} weight="bold" />
      </button>
    </InputQuantityContainer>
  );
}
