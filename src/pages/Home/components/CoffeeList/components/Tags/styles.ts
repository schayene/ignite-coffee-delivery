import styled, { css } from "styled-components";

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

interface TagProps {
  active: boolean;
}

export const Tag = styled.span<TagProps>`
  cursor: pointer;
  padding: 0.375rem 0.75rem;
  text-transform: uppercase;
  border-radius: 100px;
  font-size: 0.625rem;
  font-weight: bold;
  border: 1px solid ${(props) => props.theme.yellow};
  color: ${(props) => props.theme["yellow-dark"]};
  transition: color 0.2s, background 0.2s;

  &:hover {
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.yellow};
  }

  ${(props) =>
    props.active &&
    css`
      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme.yellow};
    `}
`;
