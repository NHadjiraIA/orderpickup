import React, { useState, useCallback } from "react";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import "./restaurantListItem.css";
import {
  DistanceMatrixService,
  LoadScript
  } from "@react-google-maps/api";
// import "components/InterviewerListItem.scss";
// import classNames from 'classnames';

export default function RestaurantListItem(props) {
  console.log("restaurant itemmmmmm", props);
  const [duration, setDuration] = useState("loading");

  return (
    <ul id="all_restaurants">
      <li
        className="mapped_restaurant"
        onMouseOver={() => {
          props.handleActiveMarker(props.restaurant.id)
        }}
        onMouseOut={() => props.handleActiveMarker(null)}
      >
        <div className="card-content">
          <div className="imagebox">
            <img src={props.restaurant.thumbnail_url} alt="thumbnail" />
          </div>
          <div className="card-text">
            <h3 className="card-title"> {props.restaurant.title}</h3>
            <div className="foodtype">
              <h4> {props.restaurant.description}</h4>
            </div>

            <div className="availability">
              <h3>Unavailable Now</h3>
            </div>

            <div className="time"> {props.restaurant.open_time} AM to {props.restaurant.close_time} PM </div>
            <div className="card-distance">
              <DriveEtaIcon />
              <LoadScript
      id="script-loader"
      googleMapsApiKey="AIzaSyDndCPosolIxMhZ7j1QbvwwhQCQlyn0t5Y"
      libraries={["places"]}
    >
              <DistanceMatrixService
        options={{
          destinations: [props.restaurantPosition],
          origins: [props.userPosition],
          travelMode: "DRIVING",
        }}
        callback={(response) => {
          // console.log(
          //   "Distance:",
          //   response.rows[0].elements[0].distance.text,
          //   "\nDuration:",
          //   response.rows[0].elements[0].duration.text
          // );
          console.log(response.rows[0].elements[0].duration.text);
          console.log('SOMETHING',props.restaurantPosition);
          setDuration(response.rows[0].elements[0].duration.text);
        }}
      />
          </LoadScript>
          <span>{duration}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
}
