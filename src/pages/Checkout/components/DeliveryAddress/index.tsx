import { MapPinLine } from "phosphor-react";
import { AddressForm, CardHeader, DeliveryAddressContainer } from "./styles";

export function DeliveryAddress() {
  return (
    <DeliveryAddressContainer>
      <CardHeader>
        <MapPinLine size={22} />
        <div>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </CardHeader>
      <AddressForm>
        <div>
          <input type="text" name="cep" placeholder="CEP" />
        </div>
        <div>
          <input type="text" name="street" placeholder="Rua" />
        </div>
        <div>
          <input type="text" name="number" placeholder="Número" />
          <input type="text" name="complement" placeholder="Complemento" />
        </div>
        <div>
          <input type="text" name="district" placeholder="Bairro" />
          <input type="text" name="city" placeholder="Cidade" />
          <input type="text" name="uf" placeholder="UF" />
        </div>
      </AddressForm>
    </DeliveryAddressContainer>
  );
}
