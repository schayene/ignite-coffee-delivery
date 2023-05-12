import { Minus, Plus } from "phosphor-react";
import { InputQuantityContainer } from "./styles";
import { ChangeEvent } from "react";

interface InputQuantityProps {
  quantity?: number;
  onChangeQuantity: (quantity: number) => void;
}

export function InputQuantity({
  quantity = 1,
  onChangeQuantity,
}: InputQuantityProps) {
  function handleChangeQuantity(event: ChangeEvent<HTMLInputElement>) {
    if (Number(event.target.value) < 1) {
      onChangeQuantity(1);
      return;
    }
    onChangeQuantity(Number(event.target.value));
  }

  function handlePlusQuantity() {
    onChangeQuantity(quantity + 1);
  }

  function handleMinusQuantity() {
    if (quantity === 1) {
      return;
    }
    onChangeQuantity(quantity - 1);
  }

  return (
    <InputQuantityContainer>
      <button type="button" onClick={handleMinusQuantity}>
        <Minus size={14} weight="bold" />
      </button>
      <input
        type="number"
        value={quantity}
        step={1}
        min={1}
        onChange={handleChangeQuantity}
      />
      <button type="button" onClick={handlePlusQuantity}>
        <Plus size={14} weight="bold" />
      </button>
    </InputQuantityContainer>
  );
}
