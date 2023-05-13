import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutContainer } from "./styles";
import { CartContextProvider } from "../../contexts/CartContext";

export function DefaultLayout() {
  return (
    <CartContextProvider>
      <LayoutContainer>
        <Header />
        <main>
          <Outlet />
        </main>
      </LayoutContainer>
    </CartContextProvider>
  );
}
