import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";
import {
  Content,
  IntroContainer,
  IntroDetails,
  IntroItens,
  Item,
} from "./styles";

import bannerImage from "../../../../assets/banner.png";

export function Intro() {
  return (
    <IntroContainer>
      <Content>
        <IntroDetails>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <IntroItens>
            <li>
              <Item background="yellow-dark">
                <ShoppingCart size={16} weight="fill" />
              </Item>
              Compra simples e segura
            </li>
            <li>
              <Item background="base-text">
                <Package size={16} weight="fill" />
              </Item>
              Embalagem mantém o café intacto
            </li>
            <li>
              <Item background="yellow">
                <Timer size={16} weight="fill" />
              </Item>
              Entrega rápida e rastreada
            </li>
            <li>
              <Item background="purple">
                <Coffee size={16} weight="fill" />
              </Item>
              O café chega fresquinho até você
            </li>
          </IntroItens>
        </IntroDetails>

        <img src={bannerImage} />
      </Content>
    </IntroContainer>
  );
}
