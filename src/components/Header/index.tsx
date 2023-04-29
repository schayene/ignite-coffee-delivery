import { MapPin, ShoppingCart } from "phosphor-react";
import { HeaderActions, HeaderContainer, IconCart, Location } from "./styles";

import coffeeDeliveryLogo from "../../assets/coffee-delivery-logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={coffeeDeliveryLogo} />

      <HeaderActions>
        <Location>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </Location>
        <IconCart type="button" title="Carrinho">
          <ShoppingCart size={22} weight="fill" />
          <span>3</span>
        </IconCart>
      </HeaderActions>
    </HeaderContainer>
  );
}
