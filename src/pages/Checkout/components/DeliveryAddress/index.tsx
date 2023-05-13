import { MapPinLine } from "phosphor-react";
import {
  AddressContainer,
  CardHeader,
  DeliveryAddressContainer,
} from "./styles";
import { useFormContext } from "react-hook-form";

export function DeliveryAddress() {
  const { register } = useFormContext();

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
            required
            {...register("postal_code")}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Rua"
            required
            {...register("street")}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Número"
            required
            {...register("number")}
          />
          <input
            type="text"
            placeholder="Complemento"
            {...register("complement")}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Bairro"
            required
            {...register("district")}
          />
          <input
            type="text"
            placeholder="Cidade"
            required
            {...register("city")}
          />
          <input type="text" placeholder="UF" required {...register("uf")} />
        </div>
      </AddressContainer>
    </DeliveryAddressContainer>
  );
}
