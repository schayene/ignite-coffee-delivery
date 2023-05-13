import { MapPin, ShoppingCart } from "phosphor-react";
import { HeaderActions, HeaderContainer, IconCart, Location } from "./styles";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import coffeeDeliveryLogo from "../../assets/coffee-delivery-logo.svg";
import { CartContext } from "../../contexts/CartContext";

export function Header() {
  const navigate = useNavigate();

  const { cart } = useContext(CartContext);

  function handleNavigateToHomePage() {
    navigate("/");
  }

  function handleNavigateToCheckoutPage() {
    navigate("/checkout");
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
          <span>{cart.totalItems}</span>
        </IconCart>
      </HeaderActions>
    </HeaderContainer>
  );
}
