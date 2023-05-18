import { MapPinLine } from "phosphor-react";
import {
  AddressContainer,
  CardHeader,
  DeliveryAddressContainer,
} from "./styles";
import { useFormContext } from "react-hook-form";

export function DeliveryAddress() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const postal_code = watch("postal_code")
    .replace(/\D/g, "")
    .replace(/^(\d{5})(\d{3})+?$/, "$1-$2");

  const messages: string[] = [];

  Object.entries(errors).forEach((element) => {
    messages.push(element[1]?.message as string);
  });

  return (
    <DeliveryAddressContainer>
      <CardHeader>
        <MapPinLine size={22} />
        <div>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </CardHeader>
      <AddressContainer>
        <div>
          <input
            type="text"
            placeholder="CEP"
            value={postal_code}
            {...register("postal_code")}
          />
          {messages.join("\n")}
        </div>
        <div>
          <input type="text" placeholder="Rua" {...register("street")} />
        </div>
        <div>
          <input type="text" placeholder="Número" {...register("number")} />
          <input
            type="text"
            placeholder="Complemento"
            {...register("complement")}
          />
        </div>
        <div>
          <input type="text" placeholder="Bairro" {...register("district")} />
          <input type="text" placeholder="Cidade" {...register("city")} />
          <input type="text" placeholder="UF" {...register("uf")} />
        </div>
      </AddressContainer>
    </DeliveryAddressContainer>
  );
}
