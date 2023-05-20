import { ReactNode, createContext, useEffect, useReducer } from "react";
import { CartItemType, CartReducer, CartType } from "../reducers/cart/reducer";
import {
  addItemToCartAction,
  removeItemFromCartAction,
  resetCartAction,
  updateQuantityOfACartItemAction,
} from "../reducers/cart/actions";

interface CartContextType {
  cart: CartType;
  addNewItemToCart: (newItem: CartItemType) => void;
  updateQuantityOfACartItem: (itemId: string, newQuantity: number) => void;
  removeItemFromCart: (itemId: string) => void;
  resetCart: () => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, dispatch] = useReducer(
    CartReducer,
    {
      items: [],
      totalItems: 0,
      totalPriceOfItemsInCart: 0,
      shippingPrice: 0,
      totalPrice: 0,
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        "@coffee-delivery:cart-1.0.0"
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return initialState;
    }
  );

  const addNewItemToCart = (newItem: CartItemType): void => {
    dispatch(addItemToCartAction(newItem));
  };

  const updateQuantityOfACartItem = (
    itemId: string,
    newQuantity: number
  ): void => {
    dispatch(updateQuantityOfACartItemAction(itemId, newQuantity));
  };

  const removeItemFromCart = (itemId: string): void => {
    dispatch(removeItemFromCartAction(itemId));
  };

  const resetCart = (): void => {
    dispatch(resetCartAction());
  };

  useEffect(() => {
    const stateJSON = JSON.stringify(cart);

    localStorage.setItem("@coffee-delivery:cart-1.0.0", stateJSON);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addNewItemToCart,
        updateQuantityOfACartItem,
        removeItemFromCart,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
