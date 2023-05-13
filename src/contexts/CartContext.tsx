import { ReactNode, createContext, useState } from "react";

export interface CartItemType {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartType {
  items: CartItemType[];
}

interface CartContextType {
  cart: CartType;
}

const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<CartType>({} as CartType);

  return (
    <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
  );
}
