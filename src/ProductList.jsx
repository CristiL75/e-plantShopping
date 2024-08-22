import React, { useState } from 'react';
import './ProductList.css';
import CartItem from './CartItem';
import { useDispatch } from 'react-redux'; // Import useDispatch to dispatch actions
import { addItem } from './CartSlice'; // Import addItem from CartSlice

function ProductList() {
    const [showCart, setShowCart] = useState(false); 
    const [addedToCart, setAddedToCart] = useState({}); // State to track added items

    const dispatch = useDispatch(); // Initialize dispatch

    const plantsArray = [
        // Your plants array data here
    ];

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant)); // Dispatch the addItem action with plant details
        setAddedToCart((prev) => ({ ...prev, [plant.name]: true })); // Track the added plant
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true); // Show the cart when the cart icon is clicked
    };

    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowCart(false); // Hide the cart when navigating to Plants
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false); // Continue shopping
    };

    return (
        <div>
            <div className="navbar" style={styleObj}>
                <div className="tag">
                    <div className="luxury">
                        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
                        <a href="/" style={{textDecoration:'none'}}>
                            <div>
                                <h3 style={{color:'white'}}>Paradise Nursery</h3>
                                <i style={{color:'white'}}>Where Green Meets Serenity</i>
                            </div>
                        </a>
                    </div>
                </div>
                <div style={styleObjUl}>
                    <div><a href="#" onClick={handlePlantsClick} style={styleA}>Plants</a></div>
                    <div><a href="#" onClick={handleCartClick} style={styleA}>
                        <h1 className='cart'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="68" width="68">
                                <rect width="156" height="156" fill="none"></rect>
                                <circle cx="80" cy="216" r="12"></circle>
                                <circle cx="184" cy="216" r="12"></circle>
                                <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                            </svg>
                        </h1>
                    </a></div>
                </div>
            </div>

            {!showCart ? (
                <div className="product-grid">
                    {plantsArray.map((category, index) => (
                        <div key={index}>
                            <h1><div>{category.category}</div></h1>
                            <div className="product-list">
                                {category.plants.map((plant, plantIndex) => (
                                    <div className="product-card" key={plantIndex}>
                                        <img className="product-image" src={plant.image} alt={plant.name} />
                                        <div className="product-title">{plant.name}</div>
                                        <div className="product-description">{plant.description}</div>
                                        <div className="product-cost">{plant.cost}</div>
                                        <button
                                            className="product-button"
                                            onClick={() => handleAddToCart(plant)}
                                            disabled={addedToCart[plant.name]} // Disable button if plant is added
                                        >
                                            {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping}/>
            )}
        </div>
    );
}

const styleObj = {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '20px',
};

const styleObjUl = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '1100px',
};

const styleA = {
    color: 'white',
    fontSize: '30px',
    textDecoration: 'none',
};

export default ProductList;
