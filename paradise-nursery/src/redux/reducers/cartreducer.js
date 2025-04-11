const initialState = {
    items: [],
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            }
            return {
                ...state,
                items: [...state.items, { ...action.payload, quantity: 1 }],
            };
        }
        case 'INCREMENT_ITEM': {
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
                ),
            };
        }
        case 'DECREMENT_ITEM': {
            return {
                ...state,
                items: state.items
                    .map(item =>
                        item.id === action.payload
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    )
                    .filter(item => item.quantity > 0), // Remove item if quantity is 0
            };
        }
        default:
            return state;
    }
};
export const incrementItem = (itemId) => {
    return {
        type: 'INCREMENT_ITEM',
        payload: itemId,
    };
};
export const decrementItem = (itemId) => {
    return {
        type: 'DECREMENT_ITEM',
        payload: itemId,
    };
};
export const removeItem = (itemId) => {
    return {
        type: 'REMOVE_ITEM',
        payload: itemId,
    };
};
export const clearCart = () => {
    return {
        type: 'CLEAR_CART',
    };
};
