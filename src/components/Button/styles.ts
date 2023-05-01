import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  border: 1px solid transparent;
  border-radius: 6px;
  text-transform: uppercase;
  font-size: 0.75rem;
  line-height: 1.6;
  transition: background 0.1s, color 0.1s;
  color: ${(props) => props.theme["base-text"]};
  background: ${(props) => props.theme["base-button"]};

  svg {
    transition: color 0.1s;
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    color: ${(props) => props.theme["base-subtitle"]};
    background: ${(props) => props.theme["base-hover"]};

    svg {
      color: ${(props) => props.theme["purple-dark"]};
    }
  }
`;
