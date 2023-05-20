export interface CartItemType {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface CartType {
  items: CartItemType[];
  totalItems: number;
  totalPriceOfItemsInCart: number;
  shippingPrice: number;
  totalPrice: number;
}

export enum ActionTypes {
  ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART",
  REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART",
  RESET_CART = "RESET_CART",
  UPDATE_QUANTITY_OF_A_CART_ITEM = "UPDATE_QUANTITY_OF_A_CART_ITEM",
}

export function CartReducer(state: CartType, action: any) {
  function updateTotalizers(items: CartItemType[]) {
    const totalPriceOfItemsInCart = items.reduce(
      (prev, cur) => (prev += cur.price * cur.quantity),
      0
    );

    return {
      totalItems: items.length,
      totalPriceOfItemsInCart,
      totalPrice: state.shippingPrice + totalPriceOfItemsInCart,
    };
  }

  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART: {
      const itemExists = state.items.some(
        (item) => item.id === action.payload.newItem.id
      );

      let newItemList = [];

      if (itemExists) {
        newItemList = state.items.map((item) => {
          if (item.id === action.payload.newItem.id) {
            return {
              ...item,
              quantity: (item.quantity += action.payload.newItem.quantity),
            };
          }
          return item;
        });
      } else {
        newItemList = [...state.items, action.payload.newItem];
      }
      return {
        ...state,
        items: newItemList,
        ...updateTotalizers(newItemList),
      };
    }
    case ActionTypes.REMOVE_ITEM_FROM_CART: {
      const newItemList = state.items.filter(
        (itemCart: CartItemType) => itemCart.id !== action.payload.itemId
      );

      return {
        ...state,
        items: newItemList,
        ...updateTotalizers(newItemList),
      };
    }
    case ActionTypes.RESET_CART:
      return {
        items: [],
        totalItems: 0,
        totalPriceOfItemsInCart: 0,
        shippingPrice: 0,
        totalPrice: 0,
      };
    case ActionTypes.UPDATE_QUANTITY_OF_A_CART_ITEM: {
      const newItemList = state.items.map((itemCart: CartItemType) => {
        if (itemCart.id === action.payload.itemId) {
          return {
            ...itemCart,
            quantity: action.payload.newQuantity,
          };
        }
        return itemCart;
      });

      return {
        ...state,
        items: newItemList,
        ...updateTotalizers(newItemList),
      };
    }
    default:
      return state;
  }
}
