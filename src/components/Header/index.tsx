import { MapPin, ShoppingCart } from "phosphor-react";
import { HeaderActions, HeaderContainer, IconCart, Location } from "./styles";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CartContext } from "../../layouts/DefaultLayout";

import coffeeDeliveryLogo from "../../assets/coffee-delivery-logo.svg";

export function Header() {
  const navigate = useNavigate();

  const { itemsCart } = useContext(CartContext);
  const totalItemsCart = itemsCart.length;

  function handleNavigateToHomePage() {
    navigate("/");
  }

  function handleNavigateToCheckoutPage() {
    navigate("/checkout");
  }

  useEffect(() => {
    if (!totalItemsCart) {
      navigate("/");
      return;
    }
  }, [totalItemsCart, navigate]);

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
          <span>{totalItemsCart}</span>
        </IconCart>
      </HeaderActions>
    </HeaderContainer>
  );
}
