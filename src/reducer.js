
function reducer(state, action) {
    switch (action.type) {
        case "CLEAR_CART":
            return { ...state, cart: [] };
        case "REMOVE": 
            return { ...state, cart: state.cart.filter((cartItem) => cartItem.id !== action.payload) }
        case "INCREASE":
            return {
                ...state, cart: state.cart.map((cartItem) => {
                    if (cartItem.id === action.payload)
                        return { ...cartItem, amount: cartItem.amount + 1 };
                    return cartItem;
                })
            }
        case "DECREASE": 
            return {
                ...state, cart: state.cart.map((cartItem) => {
                    if (cartItem.id === action.payload && cartItem.amount > 0)
                        return { ...cartItem, amount: cartItem.amount - 1 };
                    return cartItem;
                })
            }
        case "GET_TOTAL":
            let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
                const { price, amount } = cartItem;
                const itemTotal = price * amount;
                cartTotal.total += itemTotal;
                cartTotal.amount += amount;
                return cartTotal;
            }, {
                total: 0,
                amount: 0
            });
            total = parseFloat(total).toFixed(2);
            return { ...state, total, amount };

        case "ADD_BOOK":
            if (action.payload.emptyCart)
                return { ...state, cart: [action.payload.book] };
            else
                return { ...state, cart: [...state.cart, action.payload.book] }; 
        default:
            throw new Error('no matching action type');
    };
}

export default reducer;