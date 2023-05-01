import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import {
  CardHeader,
  PaymentContainer,
  PaymentForm,
  ButtonPaymentType,
} from "./styles";

export function Payment() {
  return (
    <PaymentContainer>
      <CardHeader>
        <CurrencyDollar size={22} />
        <div>
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </CardHeader>
      <PaymentForm>
        <ButtonPaymentType type="button">
          <input hidden type="radio" id="credit_card" />
          <label htmlFor="credit_card">
            <CreditCard size={16} />
            Cartão de crédito
          </label>
        </ButtonPaymentType>
        <ButtonPaymentType type="button">
          <input hidden type="radio" id="debit_card" />
          <label htmlFor="debit_card">
            <Bank size={16} />
            Cartão de débito
          </label>
        </ButtonPaymentType>
        <ButtonPaymentType type="button">
          <input hidden type="radio" id="money" />
          <label htmlFor="money">
            <Money size={16} />
            Dinheiro
          </label>
        </ButtonPaymentType>
      </PaymentForm>
    </PaymentContainer>
  );
}
