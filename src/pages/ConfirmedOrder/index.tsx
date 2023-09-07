import {
  ConfirmedOrderContainer,
  DetailContainer,
  DetailInfo,
  GradientContainer,
  OrderDetails,
} from "./styles";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useState } from "react";

import illustration from "../../assets/illustration.png";

interface PaymentTypesType {
  [key: string]: string;
}

interface OrderDetailType {
  payment_type: string;
  postal_code: string;
  street: string;
  number: string;
  district: string;
  complement: string;
  city: string;
  uf: string;
}

const initialState: OrderDetailType = {
  payment_type: "",
  postal_code: "",
  street: "",
  number: "",
  district: "",
  complement: "",
  city: "",
  uf: "",
};

export function ConfirmedOrder() {
  const [orderDetail] = useState<OrderDetailType>(() => {
    const storedStateAsJSON = sessionStorage.getItem(
      "@coffee-delivery:order-details"
    );

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON);
    }
    return initialState;
  });

  const paymentTypes: PaymentTypesType = {
    money: "Dinheiro",
    debit_card: "Cartão de Débito",
    credit_card: "Cartão de Crédito",
  };

  return (
    <ConfirmedOrderContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <div>
        <GradientContainer>
          <OrderDetails>
            <DetailContainer background="purple">
              <span>
                <MapPin size={16} weight="fill" />
              </span>
              <DetailInfo>
                <p>
                  Entrega em{" "}
                  <strong>
                    {orderDetail.street}, {orderDetail.number}
                  </strong>
                </p>
                <p>
                  {orderDetail.district} - {orderDetail.city}, {orderDetail.uf}
                </p>
              </DetailInfo>
            </DetailContainer>
            <DetailContainer background="yellow">
              <span>
                <Timer size={16} weight="fill" />
              </span>
              <DetailInfo>
                <p>Previsão de entrega</p>
                <strong>20 min - 30 min </strong>
              </DetailInfo>
            </DetailContainer>
            <DetailContainer background="yellow-dark">
              <span>
                <CurrencyDollar size={16} weight="fill" />
              </span>
              <DetailInfo>
                <p>Pagamento na entrega</p>
                <strong>{paymentTypes[orderDetail.payment_type]}</strong>
              </DetailInfo>
            </DetailContainer>
          </OrderDetails>
        </GradientContainer>
        <img src={illustration} />
      </div>
    </ConfirmedOrderContainer>
  );
}
