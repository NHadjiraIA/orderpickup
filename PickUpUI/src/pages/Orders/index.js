import React from 'react' 
import OrderList from '../../components/OrderList'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

export const Orders = () => {
    const location  = useLocation();
    const userId = location?.state?.userId;
    return (
        <div>
            <OrderList user={userId}/>
        </div>
    )
}