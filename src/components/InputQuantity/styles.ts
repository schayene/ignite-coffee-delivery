import styled from "styled-components";

export const InputQuantityContainer = styled.div`
  display: flex;
  width: 4.5rem;

  input {
    flex: 1;
    width: 100%;
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
    cursor: pointer;
    border: 0;
    width: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${(props) => props.theme.purple};
    background: ${(props) => props.theme["base-button"]};

    transition: color 0.1s;

    &:first-child {
      border-radius: 6px 0 0 6px;
    }

    &:last-child {
      border-radius: 0 6px 6px 0;
    }

    &:hover {
      color: ${(props) => props.theme["purple-dark"]};
    }
  }
`;
