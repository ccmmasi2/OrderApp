import HeaderForm from './../components/layout/header/header-form';
import React, { useEffect, useState } from "react";
import { getCategories } from '../services/ApiConnectionService';

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
            <div class="separator"></div>
            <div class="mat-app-backgroud basic-container">
                <div class="contain-main">
                    <div class="contain-head">
                        <div class="contain-title">Catalog of products</div> 
                    </div>
                    <div class="contain-body">

                        <div class="select-container-intern">
                            <div>Category:</div> 
                            <div class="select-container">
                                <select>
                                <option key="0" value="0">All</option>
                                {categories.map((category) => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                                ))}
                                </select>
                            </div>
                        </div>
                        <div class="separator"></div>
                        <div class="contain-table">

                        </div>

                        <div class="contain-paginate">

                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
};