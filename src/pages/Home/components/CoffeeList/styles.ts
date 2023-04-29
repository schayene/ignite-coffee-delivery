import styled from "styled-components";

import { Wrapper } from "../../../../layouts/DefaultLayout/styles";

export const CoffeeListContainer = styled(Wrapper)`
  padding-block: 2rem;

  h2 {
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3.375rem;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2.5rem 2rem;
`;
