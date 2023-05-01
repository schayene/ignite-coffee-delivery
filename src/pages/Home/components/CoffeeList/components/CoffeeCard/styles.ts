import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 6px 36px;
  padding: 0 1.25rem 1.25rem;

  background: ${(props) => props.theme["base-card"]};

  img {
    margin-top: -1.25rem;
    max-width: 7.5rem;
  }

  h3 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 0.5rem;
    text-align: center;
  }

  p {
    font-size: 0.875rem;
    text-align: center;
    color: ${(props) => props.theme["base-label"]};
  }
`;

export const CoffeeCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CoffeeTags = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1rem;
`;

export const CardBuy = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-top: 2rem;

  span {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.5rem;
    font-weight: 800;

    small {
      font-family: "Roboto", sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
    }
  }
`;

export const CardActions = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    cursor: pointer;
    border: 0;
    height: 2.375rem;
  }
`;

export const ButtonCart = styled.button`
  width: 2.375rem;
  border-radius: 6px;
  color: ${(props) => props.theme["base-card"]};
  background: ${(props) => props.theme["purple-dark"]};
`;
