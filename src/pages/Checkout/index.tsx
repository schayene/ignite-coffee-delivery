import { CheckoutContainer } from "./styles";
import { DeliveryAddress } from "./components/DeliveryAddress";
import { Payment } from "./components/Payment";
import { OrderSummary } from "./components/OrderSummary";

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>
        <DeliveryAddress />
        <Payment />
      </div>
      <div>
        <h2>Cafés selecionados</h2>
        <OrderSummary />
      </div>
    </CheckoutContainer>
  );
}
