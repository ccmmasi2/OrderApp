import React, { useEffect, useState } from "react";
import { listCategories } from '../../../services/api-connection.service.ts';

const OrderListForm = () => {
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

    return(
        <div> 
            <select>
                <option key="0" value="0">All</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select>
        </div>
    )
};

export default OrderListForm;