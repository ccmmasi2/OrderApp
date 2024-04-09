import React, { useEffect, useState } from "react";
import HeaderForm from './../components/layout/header/header-form';
import { PaginationOrdersTable } from '../components/PaginationOrdersTable/PaginationOrdersTable'

export default function OrderList() {
    return (
        <>
            <HeaderForm />
            <div className="separator"></div>
            <div className="mat-app-backgroud basic-container">
                <div className="contain-main">
                    <div className="contain-head">
                        <div className="contain-title">Orders</div> 
                    </div>
                    <div className="contain-body">
                        <div className="contain-table">
                            <PaginationOrdersTable />
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
};