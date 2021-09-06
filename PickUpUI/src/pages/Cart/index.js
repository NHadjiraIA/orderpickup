import React from 'react' 
import CartList from '../../components/CartList'
import { useLocation } from "react-router-dom";

export const Cart = (props) => {
    const location = useLocation();
    const userId = location?.state?.userId;
    const restaurantId = location?.state?.restaurantId;
    return (
        <div>
            <CartList
                {...props}
                userId = {userId}
                restaurantId = {restaurantId}
            />
        </div>
    )
}