import React from 'react' 
import { useState, useEffect } from 'react';
import Map from '../../components/Map'
import axios from 'axios';

import RestaurantContainer from '../../components/RestaurantContainer';
// import { getAllRestaurants } from '../../services/mapService'; 


const restaurantsList = [
    {
      id: 1,
      name: "Mouselline",
      text: "ghfgtcj,,blknkllllllll",
      open:"Open 11.30 PM - 8.30 PM",
      address: "160 Burger Street",
      img: "https://images.unsplash.com/photo-1543826173-70651703c5a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=799&q=80",
      position: { lat: 43.886471264237926, lng: -79.27779635908396 },
    },
    {
      id: 2,
      name: "Tony Romas",
      text: "ghijolllllllllll",
      open:"Open 12.00 PM - 8.30 PM",
      address: "45 Beaniee Street",
      img:  "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      position: { lat: 43.897442371992796, lng: -79.27875994348136 },
    },
    {
      id: 3,
      name: "Outback",
      text: "ooooooooooofffff",
      open:"Open 11.00 PM - 9.00 PM",
      address: "98 Jump Street",
      img: "https://images.unsplash.com/photo-1625937712159-e305336cbf4b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=844&q=80",
      position: { lat: 43.89667763035046, lng: -79.26638230855174 },
    },
  
    {
      id: 4,
      name: "The Bakery",
      text: "ooooooooooofffff",
      open:"Open 10.00 PM - 8.00 PM",
      address: "420 Jump Street",
      img: "https://images.unsplash.com/photo-1509482560494-4126f8225994?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
     ,
      position: { lat: 43.89567763035046, lng: -79.26538230855174 },
    },
  ];
  
  const defaultCenter = {
    lat: 43.888,
    lng: -79.278,
  };
export const Mapping = () => {

    // console.log("Arrayyy", getAllRestaurants());

    useEffect(() => {
         axios
        .get('http://localhost:3002/api/v1/restaurants')
        .then((res) => {
          // console.log("getAllUsers > axios res=", res);
          console.log(res.data);
         setRestaurant(res.data);
        })
        .catch((err) => {
          // console.log("getAllUsers > axios err=", err);
          // reject("Error in getAllrESTAURANTS axios!");
        });
       
    //    console.log("useeffett", array);
    }, [])

const[restaurant, setRestaurant] = useState([]);

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
      // if (position === userPosition) {
      //   return;
      // }
      console.log('USER POSITION:',position);
      setuserPosition(position);
    };
    
    return (
        <div className="container">
        <div className= "restaurant_map">
        <RestaurantContainer
      restaurants={restaurant}
      handleActiveMarker={handleActiveMarker}
      userPosition={userPosition}
      /> 
     
            <Map
            restaurants={restaurant}
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