import { MapPinLine } from "phosphor-react";
import {
  AddressContainer,
  CardHeader,
  DeliveryAddressContainer,
} from "./styles";
import { useFormContext } from "react-hook-form";
import { InputGroup } from "../../../../components/InputGroup";

export function DeliveryAddress() {
  const { watch } = useFormContext();

  const postal_code = watch("postal_code")
    .replace(/\D/g, "")
    .replace(/^(\d{5})(\d{3})+?$/, "$1-$2");

  const number = watch("number").replace(/[a-zA-Z]/g, "");

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
          <InputGroup
            type="text"
            placeholder="CEP"
            keyName="postal_code"
            value={postal_code}
          />
        </div>
        <div>
          <InputGroup type="text" placeholder="Rua" keyName="street" />
        </div>
        <div>
          <InputGroup
            type="text"
            placeholder="Número"
            keyName="number"
            value={number}
          />
          <InputGroup
            optional
            type="text"
            placeholder="Complemento"
            keyName="complement"
          />
        </div>
        <div>
          <InputGroup type="text" placeholder="Bairro" keyName="district" />
          <InputGroup type="text" placeholder="Cidade" keyName="city" />
          <InputGroup type="text" placeholder="UF" keyName="uf" />
        </div>
      </AddressContainer>
    </DeliveryAddressContainer>
  );
}
