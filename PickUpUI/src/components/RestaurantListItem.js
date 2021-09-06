import React, { useState, useCallback } from "react";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import "./restaurantListItem.css";
import { DistanceMatrixService, LoadScript } from "@react-google-maps/api";
import API from "../mapAPIKey";
import { useHistory } from "react-router-dom";
import { RESTAURANT } from "../navigation/CONSTANTS";
import date from "date-and-time";

const libraries = ["places"];

export default function RestaurantListItem(props) {
  const userId = props.userId;
  const history = useHistory();
  const restaurantInfo = props.restaurant;
const userId = props.userId;

  function handleClick() {
    console.log('RESTAURANTINFOOO', restaurantInfo);
    history.push(RESTAURANT, {
      userId: userId,
      restaurantInfo: restaurantInfo,
      duration: duration,
      userId: userId,
    });
  }

  //-------------COMPARING YOUR TIME WITH HOURS OF OPERATION-------

  // For todays date;
  Date.prototype.today = function () {
    return (
      (this.getDate() < 10 ? "0" : "") +
      this.getDate() +
      "/" +
      (this.getMonth() + 1 < 10 ? "0" : "") +
      (this.getMonth() + 1) +
      "/" +
      this.getFullYear()
    );
  };

  // For the time now
  Date.prototype.timeNow = function () {
    return (
      (this.getHours() < 10 ? "0" : "") +
      this.getHours() +
      ":" +
      (this.getMinutes() < 10 ? "0" : "") +
      this.getMinutes() +
      ":" +
      (this.getSeconds() < 10 ? "0" : "") +
      this.getSeconds()
    );
  };


  let today = new Date();
  const todayConverted = date.format(today, "hh:mm A");

  // console.log("TODAY", todayConverted);
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();

  today = `${mm} ${dd} ${yyyy}`;

  const myTime = new Date().getTime();
  const open = new Date(`${today} ${props.restaurant.open_time}:00 GMT-04:00`);
  const close = new Date(
    `${today} ${props.restaurant.close_time}:00 GMT-04:00`
  );
  const openingTime = date.format(open, "hh:mm A");
  const closingTime = date.format(close, "hh:mm A");

  // console.log("OPENING TIME", closingTime);
  const openingTimeConverted = open.getTime();
  const closingTimeConverted = close.getTime();
 
  const [duration, setDuration] = useState("loading");

  return (
    <ul id="all_restaurants">
      <li
        className="mapped_restaurant"
        onClick={() => {
          handleClick();
        }}
        onMouseOver={() => {
          props.handleActiveMarker(props.restaurant.id);
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
              <h5> {props.restaurant.description}</h5>
            </div>

            <div className="availability">
              <h4>
                {myTime > openingTimeConverted && myTime < closingTimeConverted
                  ? "Available Now"
                  : "Unavailable Now"}
              </h4>
            </div>

            <div className="time">
              {openingTime} to {closingTime}
            </div>
            <br></br>
            <div className="card-distance">
              <DriveEtaIcon />
              <LoadScript
                id="script-loader"
                googleMapsApiKey={API}
                libraries={libraries}
              >
                <DistanceMatrixService
                  options={{
                    destinations: [props.restaurantPosition],
                    origins: [props.userPosition],
                    travelMode: "DRIVING",
                  }}
                  callback={(response) => {
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
