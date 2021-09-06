import "./restaurantContainer.css";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import RestaurantListItem from "./RestaurantListItem";

export default function RestaurantContainer(props) {
  const userId = props.userId;
  let item = props.restaurants.map((restaurant) => {
    return (
      <RestaurantListItem
        userId = {userId}
        restaurant={restaurant}
        handleActiveMarker={props.handleActiveMarker}
        userPosition={props.userPosition}
        restaurantPosition={{
          lat: Number(restaurant.lat),
          lng: Number(restaurant.lng),
        }}
      />
    );
  });

  return (
    <section className="items">
      <nav>
        <ul className="itemsList">{item}</ul>
      </nav>
    </section>
  );
}
