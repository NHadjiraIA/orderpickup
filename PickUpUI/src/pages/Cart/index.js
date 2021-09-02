import React from 'react' 
import CartList from '../../components/CartList'

export const Cart = (props) => {
    return (
        <div>
            <CartList
                {...props}
            />
        </div>
    )
}