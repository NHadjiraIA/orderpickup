import React, { useState, useCallback } from "react";
import "./map.css";
import mapStyles from "./mapStyles";
import API from "../mapAPIKey";

import {
  GoogleMap,
  useJsApiLoader,
  InfoWindow,
  Marker,
  LoadScript,
  useLoadScript,
  StandaloneSearchBox,
} from "@react-google-maps/api";

const libraries = ["places"];

const containerStyle = {
  width: "75%",
  // height: "800px",
  height: "100vh",

  // display: "flex",
  float: "right",
};

const defaultCenter = {
  lat: 43.888,
  lng: -79.278,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

function Map(props) {
  function handleOnLoad() {
    navigator.geolocation.getCurrentPosition(function (position) {
      const coordinates = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      props.handleUserPosition(coordinates);
    });
  }

  const [searchBox, setSearchBox] = useState(null);

  const markers = props.restaurants;

  const onSearchBoxLoad = useCallback((ref) => {
    setSearchBox(ref);
  }, []);

  const onPlacesChanged = useCallback(() => {
    const places = searchBox.getPlaces();
    const lat = places[0].geometry.location.lat();
    const lng = places[0].geometry.location.lng();
    props.setCenter({
      lat: lat,
      lng: lng,
    });
    console.log(lat, lng);
  }, [searchBox]);

  return (
    <LoadScript id="script-loader" googleMapsApiKey={API} libraries={libraries}>
      <GoogleMap
        id="searchbox"
        mapContainerStyle={containerStyle}
        options={options}
        center={props.center}
        zoom={15}
        onClick={() => props.handleActiveMarker(null)}
        onLoad={handleOnLoad}
      >
        <StandaloneSearchBox
          onLoad={onSearchBoxLoad}
          onPlacesChanged={onPlacesChanged}
        >
          <input
            type="text"
            placeholder="Search here"
            // value="Toronto"
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `240px`,
              height: `32px`,
              padding: `0 12px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`,
              position: "absolute",
              left: "50%",
              marginLeft: "-120px",
            }}
          />
        </StandaloneSearchBox>

        {
          /* Child components, such as markers, info windows, etc. */
          <div>
            {markers.map(({ id, title, thumbnail_url, lat, lng, address }) => (
              <Marker
                key={id}
                position={{ lat: Number(lat), lng: Number(lng) }}
                onClick={() => props.handleActiveMarker(id)}
                // onMouseOver={() => props.handleActiveMarker(id)}
                // onMouseOut={() => props.handleActiveMarker(null)}
              >
                {props.activeMarker === id ? (
                  <InfoWindow
                    onCloseClick={() => props.handleActiveMarker(null)}
                  >
                    <div className="info-box-wrap">
                      <img src={thumbnail_url} alt="thumbnail" />
                      <div className="info-box-text-wrap">
                        <h6 className="name">{title}</h6>
                        <p className="address">{address}</p>
                      </div>
                    </div>
                  </InfoWindow>
                ) : null}
              </Marker>
            ))}
          </div>
        }
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
