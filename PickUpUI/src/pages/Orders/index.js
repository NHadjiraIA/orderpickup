import React from 'react' 
import OrderList from '../../components/OrderList'
import axios from 'axios';
import { useState, useEffect } from 'react';

export const Orders = () => {
    
    const[orderList, setOrderList] = useState([]);

    useEffect(() => {
        axios
       .get('http://localhost:3002/api/v1/dishs')
       .then((res) => {
            // console.log("getAllUsers > axios res=", res);
            console.log('ORDER INDEX FILE', res.data);
            setOrderList(res.data);
       })
       .catch((err) => {
         // console.log("getAllUsers > axios err=", err);
         // reject("Error in getAllrESTAURANTS axios!");
       });
      
    //    console.log("useeffett", array);
    }, [])


    return (
        <div>
            <OrderList/>
        </div>
    )
}