import React from "react";
import HeaderForm from './../components/layout/header/header-form';
import { PaginationShoppingTable } from '../components/PaginationShoppingTable/PaginationShoppingTable'

export default function ShoppingCart({selectedOption, handleOptionChange})  {

    return (
        <>
            <HeaderForm  selectedOption={selectedOption} handleOptionChange={handleOptionChange} />
            <div className="separator"></div>
            <div className="mat-app-backgroud basic-container">
                <div className="contain-main">
                    <div className="contain-head">
                        <div className="contain-title">Shopping Cart</div> 
                    </div>
                    <div className="contain-body">
                        <div className="separator"></div>
                        <div className="contain-table">
                            <PaginationShoppingTable />
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
};