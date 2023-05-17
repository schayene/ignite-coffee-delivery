import styled from "styled-components";

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Tag = styled.span`
  cursor: pointer;
  padding: 0.375rem 0.75rem;
  text-transform: uppercase;
  border-radius: 100px;
  font-size: 0.625rem;
  font-weight: bold;
  border: 1px solid ${(props) => props.theme.yellow};
  color: ${(props) => props.theme["yellow-dark"]};
`;
