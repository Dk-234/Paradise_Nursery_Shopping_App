export const addToCart = (plant) => {
    return {
        type: 'ADD_TO_CART',
        payload: plant,
    };
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