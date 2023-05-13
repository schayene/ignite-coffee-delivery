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
  itemsCart: ItemCartType[];
  setItemsCart: (items: ItemCartType[]) => void;
}

export const CartContext = createContext({} as CartContextType);

export function DefaultLayout() {
  const [itemsCart, setItemsCart] = useState<ItemCartType[]>([]);

  return (
    <CartContext.Provider value={{ itemsCart, setItemsCart }}>
      <LayoutContainer>
        <Header />
        <main>
          <Outlet />
        </main>
      </LayoutContainer>
    </CartContext.Provider>
  );
}
