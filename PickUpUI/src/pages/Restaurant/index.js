import React from 'react' 
import Restaurant from '../../components/Restaurant'

const RestaurantPage = (props) => {

    return (
        <div>
            <Restaurant
                setCart={props.setCart}
            />
        </div>
    )
}

export default RestaurantPage;