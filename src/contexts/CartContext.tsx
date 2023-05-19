import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useReducer,
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

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, dispatch] = useReducer(
    (state: CartType, action: any) => {
      console.log(state);
      if (action.type === "ADD_ITEM_TO_CART") {
        const itemExists = state.items.some(
          (item) => item.id === action.payload.newItem.id
        );

        let listOfNewItems = [];

        if (itemExists) {
          listOfNewItems = state.items.map((item) => {
            if (item.id === action.payload.newItem.id) {
              return {
                ...item,
                quantity: (item.quantity += action.payload.newItem.quantity),
              };
            }
            return item;
          });
        } else {
          listOfNewItems = [...state.items, action.payload.newItem];
        }
        return {
          ...state,
          items: listOfNewItems,
        };
      } else if (action.type === "REMOVE_ITEM_FROM_CART") {
        return {
          ...state,
          items: state.items.filter(
            (itemCart: CartItemType) => itemCart.id !== action.payload.itemId
          ),
        };
      } else if (action.type === "RESET_CART") {
        return {
          items: [],
          totalItems: 0,
          totalPriceOfItemsInCart: 0,
          shippingPrice: 0,
          totalPrice: 0,
        };
      } else if (action.type === "UPDATE_QUANTITY_OF_A_CART_ITEM") {
        return {
          ...state,
          items: state.items.map((itemCart: CartItemType) => {
            if (itemCart.id === action.payload.itemId) {
              return {
                ...itemCart,
                quantity: action.payload.newQuantity,
              };
            }
            return itemCart;
          }),
        };
      } else if (action.type === "UPDATE_TOTAL_ITEMS") {
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
      }

      return state;
    },
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

  function updateTotalItems() {
    dispatch({
      type: "UPDATE_TOTAL_ITEMS",
    });
  }

  const addNewItemToCart = (newItem: CartItemType): void => {
    dispatch({
      type: "ADD_ITEM_TO_CART",
      payload: {
        newItem,
      },
    });
    updateTotalItems();
  };

  const updateQuantityOfACartItem = (
    itemId: string,
    newQuantity: number
  ): void => {
    dispatch({
      type: "UPDATE_QUANTITY_OF_A_CART_ITEM",
      payload: {
        itemId,
        newQuantity,
      },
    });
    updateTotalItems();
  };

  const removeItemFromCart = (itemId: string): void => {
    dispatch({
      type: "REMOVE_ITEM_FROM_CART",
      payload: {
        itemId,
      },
    });
    updateTotalItems();
  };

  const resetCart = (): void => {
    dispatch({
      type: "RESET_CART",
    });
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
