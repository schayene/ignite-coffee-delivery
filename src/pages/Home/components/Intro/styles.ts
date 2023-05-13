import styled from "styled-components";

import backgroundImage from "../../../../assets/background.png";
import { Wrapper } from "../../../../layouts/DefaultLayout/styles";

export const IntroContainer = styled.div`
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 34rem;
  display: flex;
  align-items: center;
`;

export const Content = styled(Wrapper)`
  display: flex;
  align-items: center;
  gap: 3rem;

  img {
    width: 100%;
    max-width: 29rem;
  }

  @media (max-width: 992px) {
    flex-direction: column-reverse;
  }
`;

export const IntroDetails = styled.div`
  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1rem;
    color: ${(props) => props.theme["base-title"]};
  }

  p {
    font-size: 1.25rem;
    font-weight: normal;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const IntroItems = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  grid-gap: 1.25rem 2.5rem;
  margin-top: 3rem;

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`;

const STATUS_COLORS = {
  yellow: "yellow",
  purple: "purple",
  "yellow-dark": "yellow-dark",
  "base-text": "base-text",
} as const;

interface ItemProps {
  background: keyof typeof STATUS_COLORS;
}

export const Item = styled.i<ItemProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 2rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  color: ${(props) => props.theme.background};
  background: ${(props) => props.theme[STATUS_COLORS[props.background]]};
`;
