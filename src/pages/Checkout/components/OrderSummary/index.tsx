import { ConfirmOrderButton, OrderSummaryContainer } from "./styles";
import { CartItem, CartItemType } from "../../../../components/cart/CartItem";
import { useNavigate } from "react-router-dom";

import expressoTradicional from "../../../../assets/expresso-tradicional.png";
import latte from "../../../../assets/latte.png";

const cartItems: CartItemType[] = [
  {
    id: 1,
    image: expressoTradicional,
    name: "Expresso Tradicional",
    price: 9.9,
    quantity: 1,
  },
  {
    id: 2,
    image: latte,
    name: "Latte",
    price: 9.9,
    quantity: 2,
  },
];

export function OrderSummary() {
  const navigate = useNavigate();

  function handleNavigateToCompletedOrderPage() {
    navigate("/success");
  }

  return (
    <OrderSummaryContainer>
      <ul>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>

      <table>
        <tbody>
          <tr>
            <td>Total de itens</td>
            <td>R$ 29,70</td>
          </tr>
          <tr>
            <td>Entrega</td>
            <td>R$ 3,50</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>R$ 33,20</td>
          </tr>
        </tfoot>
      </table>

      <ConfirmOrderButton
        type="button"
        onClick={handleNavigateToCompletedOrderPage}
      >
        Confirmar pedido
      </ConfirmOrderButton>
    </OrderSummaryContainer>
  );
}
