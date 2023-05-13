import styled from "styled-components";
import { BaseCard, BaseCardHeader } from "../../styles";
import { ButtonContainer } from "../../../../components/Button/styles";

export const PaymentContainer = styled(BaseCard)``;

export const CardHeader = styled(BaseCardHeader)`
  svg {
    color: ${(props) => props.theme.purple};
  }
`;

export const PaymentForm = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
  grid-gap: 0.75rem;
`;

export const ButtonPaymentType = styled(ButtonContainer)`
  flex: 1;

  label {
    cursor: pointer;
    padding: 1rem;
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  &.active {
    border: 1px solid ${(props) => props.theme.purple};
    background: ${(props) => props.theme["purple-light"]};
  }
`;
