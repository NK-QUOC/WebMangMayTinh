import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import reducer from "./reducer";
import BookData from "./assets/Data/Book-data.js";

const AppContext = React.createContext();

const initialState = {
    cart: [],
    total: 0,
    amount: 0
};

function AppProvider({ children }) {
    
    const [cartState, dispatch] = useReducer(reducer, initialState);

    const clearCart = () => dispatch({ type: "CLEAR_CART" });
    const removeItem = (id) => dispatch({ type: "REMOVE", payload: id });
    const increaseAmount = (id) => dispatch({ type: "INCREASE", payload: id });
    const decreaseAmount = (id) => dispatch({ type: "DECREASE", payload: id });
    const addBookToCart = (id) => fetchBook(id);

    const fetchBook = async (id) => {
        const cartItem = cartState.cart ? cartState.cart.find((item) => item.id === id, null) : null;
        if (!cartItem) {
            let newBook = BookData.find((item) => item.id === id);
            newBook = { ...newBook, amount: 1 };
            if (cartState.state)
                dispatch({ type: "ADD_BOOK", payload: { book: newBook, cartEmpty: true } });
            else
                dispatch({ type: "ADD_BOOK", payload: { book: newBook, cartEmpty: false } });
        } else
            dispatch({ type: "INCREASE", payload: id });
    }

    useEffect(() => {
        dispatch({ type: "GET_TOTAL" });
    }, [cartState.cart]);

    return (
        <AppContext.Provider
            value={{
                ...cartState,
                clearCart, removeItem,
                increaseAmount, decreaseAmount,
                BookData, addBookToCart
            }}>
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };