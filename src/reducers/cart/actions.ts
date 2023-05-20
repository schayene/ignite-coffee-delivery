import { ActionTypes, CartItemType } from "./reducer";

export function addItemToCartAction(newItem: CartItemType) {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: {
      newItem,
    },
  };
}

export function updateQuantityOfACartItemAction(
  itemId: string,
  newQuantity: number
) {
  return {
    type: ActionTypes.UPDATE_QUANTITY_OF_A_CART_ITEM,
    payload: {
      itemId,
      newQuantity,
    },
  };
}

export function removeItemFromCartAction(itemId: string) {
  return {
    type: "REMOVE_ITEM_FROM_CART",
    payload: {
      itemId,
    },
  };
}

export function resetCartAction() {
  return {
    type: "RESET_CART",
  };
}
