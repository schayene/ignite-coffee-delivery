import styled from "styled-components";

export const TagContainer = styled.span`
  margin-top: 0.75rem;
  padding: 0.25rem 0.5rem;
  text-transform: uppercase;
  border-radius: 100px;
  font-size: 0.625rem;
  font-weight: bold;
  color: ${(props) => props.theme["yellow-dark"]};
  background: ${(props) => props.theme["yellow-light"]};
  border: 1px solid ${(props) => props.theme["yellow-light"]};
`;
