import React, { useState } from "react";
import { useNavigate  } from 'react-router-dom';

const HeaderForm = () => {
    
    const [selectedOption, setSelectedOption] = useState('1');
    const navigate = useNavigate ();

    const onHomeButtonClick = () => {
        navigate('/home/home-form');
    };

    const onOptionChange = (event) => {
        const selectedValue = event.target.value;
    
        if (selectedValue === '1') {
            navigate('/home/home-form');
        } else if (selectedValue === '2') {
            navigate('/catalog/product-list/product-list-form');
        } else if (selectedValue === '3') {
            navigate('/catalog/shopping-cart/shopping-cart-form');
        } else if (selectedValue === '4') {
            navigate('/catalog/order-list/order-list-form');
        }
    
        setSelectedOption(selectedValue);
    };

    return(
        <div className="navbar">
            <div>
                <h2>Orders administration</h2>
            </div>
            
            <button onClick={onHomeButtonClick} className="button">
                <span className="label">Home</span>
            </button>
            
            <div className="select-container">
                <select id="selectOption" onChange={onOptionChange} value={selectedOption}>
                    <option value="1">Select an option</option>
                    <option value="2">Catalog</option>
                    <option value="3">Shopping cart</option>
                    <option value="4">Order list</option>
                </select> 
            </div>
        </div> 
    )
};

export default HeaderForm;