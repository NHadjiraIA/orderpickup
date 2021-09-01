import "./restaurantContainer.css";
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import RestaurantListItem from "./RestaurantListItem";

export default function RestaurantContainer(props){
  let item = props.restaurants.map((restaurant) => {
    console.log("PicKK "+ restaurant);
return(
<RestaurantListItem
restaurant = {restaurant}
handleActiveMarker={props.handleActiveMarker}
userPosition={props.userPosition}
restaurantPosition={{lat:Number(restaurant.lat), lng:Number(restaurant.lng)}}
/>
  );
});

return(
  <section className="items">
  <ul className="itemsList">
    {item}
    </ul>
  </section>
  );
};

// export default RestaurantContainer;
