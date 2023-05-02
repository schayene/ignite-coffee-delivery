import styled from "styled-components";
import { Wrapper } from "../../layouts/DefaultLayout/styles";

export const ConfirmedOrderContainer = styled(Wrapper)`
  padding-block: 5rem;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme["yellow-dark"]};
  }

  > p {
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    margin-top: 2.5rem;

    img {
      width: 100%;
      max-width: 30.75rem;
    }
  }

  @media (max-width: 768px) {
    > div {
      flex-direction: column-reverse;
      align-items: flex-start;
    }
  }
`;

export const GradientContainer = styled.div`
  width: 100%;
  max-width: 32.875rem;
  border-radius: 6px 36px;
  padding: 1px;

  background: linear-gradient(
    to right,
    ${(props) => props.theme.yellow},
    ${(props) => props.theme.purple}
  );
`;

export const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;
  border-radius: 6px 36px;
  background: ${(props) => props.theme.background};
`;

const STATUS_COLORS = {
  yellow: "yellow",
  purple: "purple",
  "yellow-dark": "yellow-dark",
} as const;

interface DetailContainerProps {
  background: keyof typeof STATUS_COLORS;
}

export const DetailContainer = styled.div<DetailContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    min-width: 2rem;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme.background};
    background: ${(props) => props.theme[STATUS_COLORS[props.background]]};
  }
`;

export const DetailInfo = styled.div``;
