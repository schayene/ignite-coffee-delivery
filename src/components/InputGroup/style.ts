import styled, { css } from "styled-components";

interface InputGroupContainerProps {
  optional?: boolean;
  invalid?: boolean;
}

export const InputGroupContainer = styled.div<InputGroupContainerProps>`
  position: relative;
  width: 100%;

  ${(props) =>
    props.optional &&
    css`
      position: relative;
      &:after {
        content: "Opcional";
        position: absolute;
        right: 0.75rem;
        top: 0;
        height: 100%;
        display: flex;
        align-items: center;
        font-style: italic;
        font-size: 0.75rem;
        line-height: 1.3;
        color: ${(props) => props.theme["base-label"]};
      }
    `}

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

    &[type="number"]::-webkit-inner-spin-button,
    &[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type="number"] {
      -moz-appearance: textfield;
    }
  }

  ${(props) =>
    props.invalid &&
    css`
      input {
        border: 1px solid ${(props) => props.theme.error};

        &:focus {
          box-shadow: 0 0 0 2px ${(props) => props.theme.error};
        }
      }
    `}

  span {
    position: absolute;
    top: 0;
    right: 0.75rem;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 0.7rem;
    color: ${(props) => props.theme.error};
  }
`;
