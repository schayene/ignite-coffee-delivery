import styled from "styled-components";

export const CartItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};

  span {
    font-weight: 700;
    min-width: 4.3rem;
    text-align: right;
  }

  & + & {
    padding-top: 1.5rem;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;

  img {
    max-width: 4rem;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;

  input,
  button {
    height: 2rem;
  }

  > button {
    cursor: pointer;
    border: 0;
    border-radius: 6px;
    padding-inline: 0.5rem;

    text-transform: uppercase;

    display: flex;
    align-items: center;
    gap: 0.25rem;

    background: ${(props) => props.theme["base-button"]};

    svg {
      color: ${(props) => props.theme.purple};
    }
  }
`;
