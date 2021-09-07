import { createContext, useContext, useReducer } from "react";

const CartContext = createContext(null);

const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    return { ...state, [action.item.id]: action.item };
  }
  if (action.type === "REMOVE_ITEM") {
    const tempState = { ...state };
    delete tempState[action.itemId];
    return tempState;
  }
  if (action.type === "CHANGE_QUANTITY") {
    return {
      ...state,
      [action.itemId]: {
        ...state[action.itemId],
        quantity: state[action.itemId].quantity + action.step,
      },
    };
  }
  if (action.type === "EMPTY") {
    return {};
  }
  return state;
};

const CartProvider = (props) => {
  const [cart, dispatch] = useReducer(reducer, {});
  const addItem = (item) => {
    dispatch({ type: "ADD_ITEM", item });
  };
  const removeItem = (itemId) => {
    dispatch({ type: "REMOVE_ITEM", itemId });
  };
  const increaseQuantity = (itemId) => {
    dispatch({ type: "CHANGE_QUANTITY", itemId, step: 1 });
  };
  const decreaseQuantity = (itemId) => {
    dispatch({ type: "CHANGE_QUANTITY", itemId, step: -1 });
  };
  const emptyCart = () => {
    dispatch({ type: "EMPTY" });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
        emptyCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("Must call within CartContext Provider");
  }
  return context;
};

export default CartProvider;
