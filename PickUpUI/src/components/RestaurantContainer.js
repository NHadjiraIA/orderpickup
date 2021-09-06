import "./restaurantContainer.css";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import RestaurantListItem from "./RestaurantListItem";

export default function RestaurantContainer(props) {
  let item = props.restaurants.map((restaurant) => {
    return (
      <RestaurantListItem
        restaurant={restaurant}
        handleActiveMarker={props.handleActiveMarker}
        userPosition={props.userPosition}
        userId={props.userId}
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

// export default RestaurantContainer;
