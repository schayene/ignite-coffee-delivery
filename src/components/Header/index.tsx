import { MapPin, ShoppingCart } from "phosphor-react";
import { HeaderActions, HeaderContainer, IconCart, Location } from "./styles";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CartContext } from "../../layouts/DefaultLayout";

import coffeeDeliveryLogo from "../../assets/coffee-delivery-logo.svg";

export function Header() {
  const navigate = useNavigate();

  const { itensCart } = useContext(CartContext);
  const totalItensCart = itensCart.length;

  function handleNavigateToHomePage() {
    navigate("/");
  }

  function handleNavigateToCheckoutPage() {
    navigate("/checkout");
  }

  useEffect(() => {
    if (!totalItensCart) {
      navigate("/");
      return;
    }
  }, [totalItensCart, navigate]);

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
          <span>{totalItensCart}</span>
        </IconCart>
      </HeaderActions>
    </HeaderContainer>
  );
}
