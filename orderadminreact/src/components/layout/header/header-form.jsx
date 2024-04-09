import React, { useState } from "react";
import { useNavigate  } from 'react-router-dom';

const HeaderForm = () => {
    
    const [selectedOption, setSelectedOption] = useState('1');
    const history = useNavigate ();

    const onHomeButtonClick = () => {
        history.push('/');
    };

    const onOptionChange = (event) => {
        const selectedValue = event.target.value;
    
        if (selectedValue === '1') {
          history.push('/');
        } else if (selectedValue === '2') {
          history.push('/Order/catalog');
        } else if (selectedValue === '3') {
          history.push('/Order/shopping-cart');
        } else if (selectedValue === '4') {
          history.push('/Order/order-list');
        }
    
        setSelectedOption(selectedValue);
    };

    return(
        <div class="navbar">
            <div>
                <h2>Orders administration</h2>
            </div>
            
            <button onClick={onHomeButtonClick} class="button">
                <span class="label">Home</span>
            </button>
            
            <div class="select-container">
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