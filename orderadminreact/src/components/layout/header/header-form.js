import React, { useState } from "react";
import { useNavigate  } from 'react-router-dom';

const HeaderForm = ({selectedOption, handleOptionChange}) => {
    const navigate = useNavigate ();
    
    const onHomeButtonClick = () => {
         navigate('/Home');
         handleOptionChange('1');
    };

    const onOptionChange = (event) => {
        const selectedValue = event.target.value;
        handleOptionChange(selectedValue);

        if (selectedValue === '1') {
            navigate('/Home');
        } else if (selectedValue === '2') {
            navigate('/Catalog');
        } else if (selectedValue === '3') {
            navigate('/Shopping-Cart');
        } else if (selectedValue === '4') {
            navigate('/Order-List');
        }
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