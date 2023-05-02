import styled from "styled-components";
import { Wrapper } from "../../layouts/DefaultLayout/styles";

export const CheckoutContainer = styled(Wrapper)`
  display: flex;
  gap: 2rem;

  padding-block: 2.5rem;

  h2 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.125rem;
    margin-bottom: 0.93rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  > div {
    &:first-child {
      flex: 1.5;
    }

    &:last-child {
      flex: 1;
    }
  }

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const BaseCard = styled.div`
  padding: 2.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme["base-card"]};

  & + & {
    margin-top: 0.75rem;
  }
`;

export const BaseCardHeader = styled.header`
  display: flex;
  gap: 0.5rem;

  margin-bottom: 2rem;

  h3 {
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  p {
    font-size: 0.875rem;
  }
`;
