import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementItem, decrementItem } from '../redux/actions/cartActions';
//import '../components/Landingpage.css'; // Import the CSS for background and styling

const ShoppingCart = () => {
    const dispatch = useDispatch();

    // Access cart items from Redux store
    const cartItems = useSelector((state) => state.cart.items);

    // Calculate total cost
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handleIncrement = (itemId) => {
        dispatch(incrementItem(itemId));
    };

    const handleDecrement = (itemId) => {
        dispatch(decrementItem(itemId));
    };

    return (
        <div className="landing-page">
            <div className="shopping-cart">
                <h1>Shopping Cart</h1>
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={`../assets/images/${item.thumbnail}`} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>Price: ₹{item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                            <button onClick={() => handleIncrement(item.id)}>Increase</button>
                            <button onClick={() => handleDecrement(item.id)}>Decrease</button>
                        </div>
                    ))}
                </div>
                <h3>Total Cost: ₹{calculateTotal()}</h3>
                <button>Checkout (Coming Soon)</button>
                <button onClick={() => window.location.href = '/products'}>Continue Shopping</button>
            </div>
        </div>
    );
};

export default ShoppingCart;
