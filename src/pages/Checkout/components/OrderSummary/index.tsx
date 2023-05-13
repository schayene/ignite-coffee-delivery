import { ConfirmOrderButton, OrderSummaryContainer } from "./styles";
import { CartItem } from "../../../../components/cart/CartItem";
import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { getFormattedPrice } from "../../../../helpers/formatHelper";

export function OrderSummary() {
  const { cart } = useContext(CartContext);

  const formattedTotalPriceOfItemsInCart = getFormattedPrice(
    cart.totalPriceOfItemsInCart
  );

  const formattedTotalShippingPrice = getFormattedPrice(cart.shippingPrice);

  const totalPriceFormatted = getFormattedPrice(
    cart.totalPriceOfItemsInCart + cart.shippingPrice
  );

  return (
    <OrderSummaryContainer>
      <ul>
        {cart.items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>

      <table>
        <tbody>
          <tr>
            <td>Total de itens</td>
            <td>{formattedTotalPriceOfItemsInCart}</td>
          </tr>
          <tr>
            <td>Entrega</td>
            <td>{formattedTotalShippingPrice}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>{totalPriceFormatted}</td>
          </tr>
        </tfoot>
      </table>

      <ConfirmOrderButton type="submit">Confirmar pedido</ConfirmOrderButton>
    </OrderSummaryContainer>
  );
}
