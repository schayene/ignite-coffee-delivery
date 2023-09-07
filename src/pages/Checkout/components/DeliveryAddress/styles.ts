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

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div {
    display: flex;
    gap: 0.75rem;

    @media (max-width: 576px) {
      flex-direction: column;
    }
  }
`;
