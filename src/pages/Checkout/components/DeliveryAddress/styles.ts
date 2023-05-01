import styled from "styled-components";
import { BaseCard, BaseCardHeader } from "../../styles";

export const DeliveryAddressContainer = styled(BaseCard)`
  display: flex;
  flex-direction: column;
`;

export const CardHeader = styled(BaseCardHeader)`
  svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const AddressForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div {
    display: flex;
    gap: 0.75rem;

    input {
      width: 100%;
      border-radius: 4px;
      padding: 0.75rem;
      font-size: 0.875rem;

      color: ${(props) => props.theme["base-text"]};
      border: 1px solid ${(props) => props.theme["base-button"]};
      background: ${(props) => props.theme["base-input"]};

      &::placeholder {
        color: ${(props) => props.theme["base-label"]};
      }

      &:focus {
        box-shadow: 0 0 0 2px ${(props) => props.theme["yellow-dark"]};
      }

      &[name="cep"] {
        max-width: 12rem;
      }
      &[name="street"] {
        flex: 1;
      }
      &[name="number"] {
        max-width: 12rem;
      }
      &[name="complement"] {
        flex: 1;
      }
      &[name="district"] {
        max-width: 12rem;
      }
      &[name="city"] {
        flex: 1;
      }
      &[name="uf"] {
        max-width: 3.75rem;
      }
    }

    @media (max-width: 576px) {
      flex-direction: column;
    }
  }
`;
