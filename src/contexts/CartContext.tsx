import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";

export interface CartItemType {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartType {
  items: CartItemType[];
  totalItems: number;
  totalPriceOfItemsInCart: number;
  shippingPrice: number;
  totalPrice: number;
}

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

const initialState = {
  items: [],
  totalItems: 0,
  totalPriceOfItemsInCart: 0,
  shippingPrice: 0,
  totalPrice: 0,
};

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<CartType>(() => {
    const storedStateAsJSON = localStorage.getItem(
      "@coffee-delivery:cart-1.0.0"
    );

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON);
    }

    return initialState;
  });

  function updateTotalItems() {
    setCart((state) => {
      const totalPriceOfItemsInCart = state.items.reduce(
        (prev, cur) => (prev += cur.price * cur.quantity),
        0
      );

      return {
        ...state,
        totalItems: state.items.length,
        totalPriceOfItemsInCart,
        totalPrice: state.shippingPrice + totalPriceOfItemsInCart,
      };
    });
  }

  const addNewItemToCart = useCallback((newItem: CartItemType): void => {
    setCart((state) => {
      const itemExists = state.items.some((item) => item.id === newItem.id);

      let listOfNewItems = [];

      if (itemExists) {
        listOfNewItems = state.items.map((item) => {
          if (item.id === newItem.id) {
            return {
              ...item,
              quantity: (item.quantity += newItem.quantity),
            };
          }
          return item;
        });
      } else {
        listOfNewItems = [...state.items, newItem];
      }

      return {
        ...state,
        items: listOfNewItems,
      };
    });
    updateTotalItems();
  }, []);

  const updateQuantityOfACartItem = useCallback(
    (itemId: string, newQuantity: number): void => {
      setCart((state) => {
        return {
          ...state,
          items: state.items.map((itemCart: CartItemType) => {
            if (itemCart.id === itemId) {
              return {
                ...itemCart,
                quantity: newQuantity,
              };
            }
            return itemCart;
          }),
        };
      });
      updateTotalItems();
    },
    []
  );

  const removeItemFromCart = useCallback((itemId: string): void => {
    setCart((state) => {
      return {
        ...state,
        items: state.items.filter(
          (itemCart: CartItemType) => itemCart.id !== itemId
        ),
      };
    });
    updateTotalItems();
  }, []);

  const resetCart = useCallback((): void => {
    setCart(initialState);
  }, []);

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
