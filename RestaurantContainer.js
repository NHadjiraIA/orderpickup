import "./restaurantContainer.css";
import React, { Component }  from 'react';
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import RestaurantListItem from "./RestaurantListItem";

export default function RestaurantContainer(props) {
  const userId = props.userId;
  let item = props.branches.map((branch) => {
    return (
      <RestaurantListItem
        userId = {userId}
        branch={branch}
        handleActiveMarker={props.handleActiveMarker}
        userPosition={props.userPosition}
        userId={props.userId}
        restaurantPosition={{
          lat: Number(branch.lat),
          lng: Number(branch.lng),
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
