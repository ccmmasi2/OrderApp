import React, { useEffect, useState } from "react";
import HeaderForm from './../components/layout/header/header-form';
import { getCategories } from '../services/ApiConnectionService';
import { PaginationProductTable } from '../components/PaginationProductsTable/PaginationProductsTable'

export default function ProductList({selectedOption, handleOptionChange}) {
    const [categories, setCategories] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(0); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getCategories();
                setCategories(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []); 

    const handleCategoryChange = (event) => {
        const categoryId = parseInt(event.target.value);
        setSelectedCategoryId(categoryId);
    };

    return (
        <>
            <HeaderForm  selectedOption={selectedOption} handleOptionChange={handleOptionChange} />
            <div className="separator"></div>
            <div className="mat-app-backgroud basic-container">
                <div className="contain-main">
                    <div className="contain-head">
                        <div className="contain-title">Catalog of products</div> 
                    </div>
                    <div className="contain-body">

                        <div className="select-container-intern">
                            <div>Category:</div> 
                            <div className="select-container">
                                <select onChange={handleCategoryChange}>
                                    <option key="0" value="0">All</option>
                                    {categories.map((category) => (
                                    <option key={category.id} value={category.id}>{category.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="separator"></div>
                        <div className="contain-table">
                            <PaginationProductTable categoryId={selectedCategoryId}/>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
};