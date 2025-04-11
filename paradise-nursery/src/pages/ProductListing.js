import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, incrementItem, decrementItem } from '../redux/actions/cartActions';
import plants from '../assets/data/plants';
import '../components/ProductListing.css'; // Import only ProductListing.css
import { Link } from 'react-router-dom';
import cartIcon from '../assets/images/bxs-cart.png'; // Add your cart icon image here

const ProductListing = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Number of items per page
    const totalPages = Math.ceil(plants.length / itemsPerPage);

    const handleAddToCart = (plant) => {
        dispatch(addToCart(plant));
    };

    const handleIncrement = (plantId) => {
        dispatch(incrementItem(plantId));
    };

    const handleDecrement = (plantId) => {
        dispatch(decrementItem(plantId));
    };

    const getCartItemQuantity = (plantId) => {
        const item = cartItems.find((cartItem) => cartItem.id === plantId);
        return item ? item.quantity : 0;
    };

    // Slice the plants array for the current page
    const currentPlants = plants.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="landing-page">
            {/* Shopping Cart Button with Image */}
            <div className="cart-icon-container">
                <Link to="/cart">
                    <img src={cartIcon} alt="Shopping Cart" className="cart-icon" />
                </Link>
            </div>

            <div className="product-listing">
                {currentPlants.map((plant) => {
                    const quantity = getCartItemQuantity(plant.id);
                    return (
                        <div key={plant.id} className="plant-item">
                            <img src={`../assets/images/${plant.thumbnail}`} alt={plant.name} />
                            <h3>{plant.name}</h3>
                            <p>Price: ₹{plant.price}</p>
                            {quantity === 0 ? (
                                <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
                            ) : (
                                <div className="quantity-controls">
                                    <button onClick={() => handleDecrement(plant.id)}>-</button>
                                    <span>{quantity}</span>
                                    <button onClick={() => handleIncrement(plant.id)}>+</button>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Pagination Controls */}
            <div className="pagination">
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default ProductListing;
