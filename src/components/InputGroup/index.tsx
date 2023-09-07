import { InputHTMLAttributes } from "react";
import { InputGroupContainer } from "./style";
import { useFormContext } from "react-hook-form";
import { WarningCircle } from "phosphor-react";

interface InputGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  keyName: string;
  optional?: boolean;
}

export function InputGroup({ keyName, optional, ...props }: InputGroupProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[keyName]?.message;

  return (
    <InputGroupContainer optional={optional} invalid={!!error}>
      <input type="text" placeholder="Rua" {...props} {...register(keyName)} />

      {error && (
        <span title={error as string}>
          <WarningCircle size={16} />
        </span>
      )}
    </InputGroupContainer>
  );
}
