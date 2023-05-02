import {
  ConfirmedOrderContainer,
  DetailContainer,
  DetailInfo,
  GradientContainer,
  OrderDetails,
} from "./styles";

import illustration from "../../assets/illustration.png";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

export function ConfirmedOrder() {
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
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
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
                <strong>Cartão de Crédito</strong>
              </DetailInfo>
            </DetailContainer>
          </OrderDetails>
        </GradientContainer>
        <img src={illustration} />
      </div>
    </ConfirmedOrderContainer>
  );
}
