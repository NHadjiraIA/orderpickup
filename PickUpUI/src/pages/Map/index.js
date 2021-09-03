import React from 'react' 
import { useState, useEffect } from 'react';
import Map from '../../components/Map'
import axios from 'axios';

import RestaurantContainer from '../../components/RestaurantContainer';
// import { getAllRestaurants } from '../../services/mapService'; 

  
  const defaultCenter = {
    lat: 43.888,
    lng: -79.278,
  };
export const Mapping = (props) => {

 const restaurants = props.restaurants;

    const [activeMarker, setActiveMarker] = useState(null);
    const [center, setCenter] = useState(defaultCenter);
    const [userPosition, setuserPosition] = useState(defaultCenter);
    const handleActiveMarker = (marker) => {
      if (marker === activeMarker) {
        return;
      }
      setActiveMarker(marker);
    };
    const handleUserPosition = (position) => {
     
      console.log('USER POSITION:',position);
      setuserPosition(position);
    };
    
    return (
        <div className="container">
        <div className= "restaurant_map">
        <RestaurantContainer
      restaurants={restaurants}
      handleActiveMarker={handleActiveMarker}
      userPosition={userPosition}
      /> 
     
            <Map
            restaurants={restaurants}
            handleActiveMarker={handleActiveMarker}
            handleUserPosition={handleUserPosition}
            handleUserPosition = {handleUserPosition}
            activeMarker={activeMarker}
            center={center}
            setCenter={setCenter}
            />
            
        </div>
        </div>
    )
}