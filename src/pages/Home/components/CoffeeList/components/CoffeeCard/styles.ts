import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 6px 36px;
  padding: 0 1.25rem 1.25rem;

  background: ${(props) => props.theme["base-card"]};

  img {
    margin-top: -1.25rem;
  }

  h3 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    text-align: center;
    color: ${(props) => props.theme["base-label"]};
  }
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

export const InputQuantity = styled.div`
  display: flex;
  width: 4.5rem;

  input {
    flex: 1;
    width: 100%;
    height: 2.375rem;
    text-align: center;

    border: 0;
    background: ${(props) => props.theme["base-button"]};

    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
  }

  button {
    width: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${(props) => props.theme.purple};
    background: ${(props) => props.theme["base-button"]};

    &:first-child {
      border-radius: 6px 0 0 6px;
    }

    &:last-child {
      border-radius: 0 6px 6px 0;
    }
  }
`;

export const ButtonCart = styled.button`
  width: 2.375rem;
  border-radius: 6px;
  color: ${(props) => props.theme["base-card"]};
  background: ${(props) => props.theme["purple-dark"]};
`;
