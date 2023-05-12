import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutContainer } from "./styles";
import { createContext, useState } from "react";

export interface ItemCartType {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextType {
  itensCart: ItemCartType[];
  setItensCart: (itens: ItemCartType[]) => void;
}

export const CartContext = createContext({} as CartContextType);

export function DefaultLayout() {
  const [itensCart, setItensCart] = useState<ItemCartType[]>([]);

  return (
    <CartContext.Provider value={{ itensCart, setItensCart }}>
      <LayoutContainer>
        <Header />
        <main>
          <Outlet />
        </main>
      </LayoutContainer>
    </CartContext.Provider>
  );
}
