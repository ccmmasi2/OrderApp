import HeaderForm from './../components/layout/header/header-form';
import React, { useEffect, useState } from "react";
import { listCategories } from '../services/ApiConnectionService';

export default function ProductList() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await listCategories();
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
            <div> 
                <select>
                    <option key="0" value="0">All</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>
            </div>
        </>
    )
};