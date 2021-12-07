import React from 'react' 
import Marketer from '../../components/Marketer';
import { useLocation } from "react-router-dom";

export const Marketers = () => {
    const location  = useLocation();
   
    return (
        <div>
            <Marketer/>
        </div>
    )
}