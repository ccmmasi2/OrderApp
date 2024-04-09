import React, { useEffect, useState } from "react";
import HeaderForm from './../components/layout/header/header-form';
import { getCategories } from '../services/ApiConnectionService';
import { PaginationTable } from '../components/pagination/PaginationTable'

export default function ProductList() {
    const [categories, setCategories] = useState([]);

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

    return (
        <>
            <HeaderForm />
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
                                <select>
                                <option key="0" value="0">All</option>
                                {categories.map((category) => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                                ))}
                                </select>
                            </div>
                        </div>
                        <div className="separator"></div>
                        <div className="contain-table">
                            <PaginationTable/>
                        </div>
                    </div>
                </div>
            </div>
            <br></br> 
            <div className="contain-table">

            </div>
        </>
    )
};