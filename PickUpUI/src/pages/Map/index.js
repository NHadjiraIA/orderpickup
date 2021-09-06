import React from 'react' 
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Map from '../../components/Map'
import RestaurantContainer from '../../components/RestaurantContainer';

  
  const defaultCenter = {
    lat: 43.888,
    lng: -79.278,
  };
export const Mapping = (props) => {
  const location = useLocation();
  const userId = location?.state?.userId;
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
          userId = {userId}
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