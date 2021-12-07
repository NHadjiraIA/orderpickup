import React from 'react' 
import EndUser from '../../components/EndUser';
import { useLocation } from "react-router-dom";;

export const Enduser = () => {
    const location  = useLocation();
   
    return (
        <div>
         <EndUser/>
        </div>
    )
}