import { MapPin, ShoppingCart } from "phosphor-react";
import { HeaderActions, HeaderContainer, IconCart, Location } from "./styles";
import { useNavigate } from "react-router-dom";

import coffeeDeliveryLogo from "../../assets/coffee-delivery-logo.svg";

export function Header() {
  const navigate = useNavigate();

  function handleNavigateToCheckoutPage() {
    navigate("/checkout");
  }

  function handleNavigateToHomePage() {
    navigate("/");
  }

  return (
    <HeaderContainer>
      <img src={coffeeDeliveryLogo} onClick={handleNavigateToHomePage} />

      <HeaderActions>
        <Location>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </Location>
        <IconCart
          type="button"
          title="Carrinho"
          onClick={handleNavigateToCheckoutPage}
        >
          <ShoppingCart size={22} weight="fill" />
          <span>3</span>
        </IconCart>
      </HeaderActions>
    </HeaderContainer>
  );
}
