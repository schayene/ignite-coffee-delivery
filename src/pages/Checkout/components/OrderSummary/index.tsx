import { ConfirmOrderButton, OrderSummaryContainer } from "./styles";
import { CartItem } from "../../../../components/cart/CartItem";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../../layouts/DefaultLayout";

export function OrderSummary() {
  const navigate = useNavigate();

  const { itensCart } = useContext(CartContext);

  function handleNavigateToCompletedOrderPage() {
    navigate("/success");
  }

  return (
    <OrderSummaryContainer>
      <ul>
        {itensCart.map((item) => (
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
