import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import {
  CardHeader,
  PaymentContainer,
  PaymentForm,
  ButtonPaymentType,
} from "./styles";
import { useFormContext } from "react-hook-form";

export function Payment() {
  const { register, watch } = useFormContext();

  const paymentType = watch("payment_type");

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
        <ButtonPaymentType
          type="button"
          className={`${paymentType === "credit_card" && "active"}`}
        >
          <input
            hidden
            type="radio"
            id="credit_card"
            value="credit_card"
            {...register("payment_type")}
          />
          <label htmlFor="credit_card">
            <CreditCard size={16} />
            Cartão de crédito
          </label>
        </ButtonPaymentType>
        <ButtonPaymentType
          type="button"
          className={`${paymentType === "debit_card" && "active"}`}
        >
          <input
            hidden
            type="radio"
            id="debit_card"
            value="debit_card"
            {...register("payment_type")}
          />
          <label htmlFor="debit_card">
            <Bank size={16} />
            Cartão de débito
          </label>
        </ButtonPaymentType>
        <ButtonPaymentType
          type="button"
          className={`${paymentType === "money" && "active"}`}
        >
          <input
            hidden
            type="radio"
            id="money"
            value="money"
            {...register("payment_type")}
          />
          <label htmlFor="money">
            <Money size={16} />
            Dinheiro
          </label>
        </ButtonPaymentType>
      </PaymentForm>
    </PaymentContainer>
  );
}
