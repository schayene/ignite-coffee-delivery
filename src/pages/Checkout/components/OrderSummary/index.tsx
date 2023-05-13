import { ConfirmOrderButton, OrderSummaryContainer } from "./styles";
import { CartItem } from "../../../../components/cart/CartItem";
import { useContext } from "react";
import { CartContext } from "../../../../layouts/DefaultLayout";

export function OrderSummary() {
  const { itemsCart } = useContext(CartContext);

  const totalOfItemsInCart = itemsCart.reduce(
    (prev, cur) => (prev += cur.price * cur.quantity),
    0
  );
  const formattedTotalOfItemsInCart = totalOfItemsInCart.toLocaleString(
    "pt-br",
    {
      style: "currency",
      currency: "BRL",
    }
  );

  const totalFreight = 3.5;
  const formattedTotalFreight = totalFreight.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  const totalFormatted = (totalOfItemsInCart + totalFreight).toLocaleString(
    "pt-br",
    {
      style: "currency",
      currency: "BRL",
    }
  );

  return (
    <OrderSummaryContainer>
      <ul>
        {itemsCart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>

      <table>
        <tbody>
          <tr>
            <td>Total de itens</td>
            <td>{formattedTotalOfItemsInCart}</td>
          </tr>
          <tr>
            <td>Entrega</td>
            <td>{formattedTotalFreight}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>{totalFormatted}</td>
          </tr>
        </tfoot>
      </table>

      <ConfirmOrderButton type="submit">Confirmar pedido</ConfirmOrderButton>
    </OrderSummaryContainer>
  );
}
