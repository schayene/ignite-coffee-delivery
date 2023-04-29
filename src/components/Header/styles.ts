import styled from "styled-components";

export const HeaderContainer = styled.header`
  max-width: 70rem;
  margin: 0 auto;
  padding: 2rem 1rem;

  display: flex;
  justify-content: space-between;
  align-items: stretch;
`;

export const HeaderActions = styled.div`
  display: flex;
  gap: 0.75rem;
  height: 2.375rem;
`;

export const IconCart = styled.button`
  position: relative;
  cursor: pointer;
  width: 2.375rem;
  border: 0;
  border-radius: 6px;
  line-height: 1;
  color: ${(props) => props.theme["yellow-dark"]};
  background: ${(props) => props.theme["yellow-light"]};

  span {
    position: absolute;
    right: -0.52rem;
    top: -0.5rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    font-size: 0.75rem;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const Location = styled.div`
  font-size: 0.875rem;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  border-radius: 6px;
  color: ${(props) => props.theme["purple-dark"]};
  background: ${(props) => props.theme["purple-light"]};
`;
