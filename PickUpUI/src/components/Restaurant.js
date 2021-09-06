import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "./ProductList.js";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import CommentList from "./CommentList.js";
import Button from "@material-ui/core/Button";
import { useLocation } from "react-router-dom";
import CallEndRoundedIcon from "@material-ui/icons/CallEndRounded";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import RoomIcon from "@material-ui/icons/Room";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heroroot: {
    display: "flex",
    flexDirection: "row",
    height: "280px !important",
    // width: "100%",
    backgroundColor: "#57cc99",

    paddingLeft: "11.5em",
    paddingRight: "10em",
    paddingTop: "90px",
  },
  restaurantcard: {
    width: "50%",
    display: "flex",
    flexDirection: "row",
    "& img": {
      padding: "1em",
    },
    height: "100%",
  },
  restaurantinfo: {
    paddingRight: "1em",
    marginTop: "1em",
    marginBottom: "1em",
    paddingTop: "1em",
  },
  restaurantName: { paddingLeft: "1em" },

  tagsAndDistance: {
    display: "flex",
    flexDirection: "row",
    marginTop: "0.4em",
  },

  tags: {
    width: "70%",
  },

  distance: {
    width: "70%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingLeft: "1.8em",
  },

  contactinfo: {
    width: "50%",
    paddingLeft: "1em",
    paddingRight: "1em",
    borderLeft: "white solid 2px",
    marginTop: "1em",
    marginBottom: "1em",
    // height: "100%",
  },

  heroMenu: {
    backgroundColor: "#22577A",
    color: "white",

    display: "flex",
    height: "3em",

    paddingLeft: "11em",
    paddingRight: "2em",
    "& button": {
      paddingLeft: "2em",
      paddingRight: "2em",
      color: "white",
      textDecoration: "none",
    },
  },

  menu: {
    marginLeft: "10%",
    marginRight: "10%",
  },
}));

function Restaurant() {
  const location = useLocation();
  const classes = useStyles();


  const restaurantDetails = location.state.restaurantInfo;
  const durationTime = location.state.duration;
// console.log('RESTAUXUXU', restaurantDetails);
  const userId = location.state.userId;
  const [activeState, setActiveState] = useState({
    menu: true,
    comments: false,
  });

  const [dishes, setDishes] = useState([]);
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:3002/api/v1/restaurant/${restaurantDetails.id}/dishes`
      )
      .then((res) => {
        // console.log("Dishes", res.data);

        setDishes(res.data);
      })
      .catch((err) => {});
  }, []);

// Get average ratings value for each restaurant
  useEffect(() => {
    axios
      .get(
        `http://localhost:3002/api/v1/ratings?restaurantId=${restaurantDetails.id}`
      )
      .then((res) => {
        console.log("Ratingsss", res.data.Stats.Average);

        setRatings(Math.floor(res.data.Stats.Average));
      })
      .catch((err) => {});
  }, []);
  // console.log('RESTIDIDIDIDIDID', restaurantDetails.id);
  const toggleActive = (currentState) => {
    // setActiveState({...activeState, currentState: true})
    if (currentState === "menu") {
      setActiveState({ menu: true, comment: false });
    } else {
      setActiveState({ menu: false, comment: true });
    }
  };

  /***********Dont delete it yettttttt ************/
  // function DishSelection() {
  //   const dishesList = dishes.map((dish) => {
  //     let output = "";
  //     if (dish.vegan) {
  //       output += "<p>#Vegan</p>";
  //     }
  //     if (dish.gluten) {
  //       output += "<p>#Gluten free</p>";
  //     }
  //     if (dish.halal) {
  //       output += "<p>#Halal</p>";
  //     }
  //     if (dish.dairy) {
  //       output += "<p>#Dairy free</p>";
  //     }
  //     if (dish.nuts) {
  //       output += "<p>#Contains nuts</p>";
  //     }
  //     if (dish.marijuana) {
  //       output += "<p>#Contains cannabis</p>";
  //     }

  //     console.log("DISHESES", dish);
  //     console.log(output);
  //     return parse(output);
  //   });
  //   return dishesList;
  // }

  /***********Dont delete it yettttttt ************/

  return (
    <div>
      <hero
        className={classes.heroroot}
        style={{
          backgroundColor: "#38A3A5",
          color: "white",
        }}
      >
        <div className={classes.restaurantcard}>
          <img
            src={restaurantDetails.thumbnail_url}
            alt="thumbnail"
            // style={{ height: "100px", width: "100px" }}
          />
          <div className={classes.restaurantinfo}>
            <Typography
              className={classes.restaurantName}
              variant="h5"
              align="left"
            >
              {restaurantDetails.title}
            </Typography>
            <Box component="fieldset" mb={-2} borderColor="transparent">
              <Rating name="read-only" value={ratings} readOnly />
            </Box>
            <div className={classes.tagsAndDistance}>
              {/* <div className={classes.tags}>
                <DishSelection /> Dont Delete thisss yet
              </div> */}
              <div className={classes.distance}>
                <DriveEtaIcon />
                <p>{durationTime}</p>
              </div>
            </div>
          </div>
        </div>
        {/* <hr className={classes.linedivider}></hr> */}
        <div className={classes.contactinfo}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <RoomIcon fontSize="large" style={{ paddingRight: "0.3em" }} />
            <Typography align="left" variant="h6">
              {restaurantDetails.address}
            </Typography>
          </div>

          <Typography
            align="left"
            variant="h6"
            style={{ paddingLeft: "2.3em" }}
          >
            {restaurantDetails.city} | {restaurantDetails.prov_state}
          </Typography>

          <br></br>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <CallEndRoundedIcon
              fontSize="large"
              style={{ paddingRight: "0.3em" }}
            />
            <Typography align="left" variant="h6">
              {restaurantDetails.phone}
              </Typography>
           
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <EmailOutlinedIcon
              fontSize="large"
              style={{ paddingRight: "0.3em" }}
            />
            <Typography align="left" variant="h6">
              {restaurantDetails.email}
            </Typography>
          </div>
        </div>
      </hero>
      <div className={classes.heroMenu}>
        <Button onClick={() => toggleActive("menu")} disableElevation>
          <Typography variant="h6">Menu</Typography>
        </Button>
        <Button onClick={() => toggleActive("comments")} disableElevation>
          <Typography variant="h6">Comments</Typography>
        </Button>
      </div>
      {activeState.menu && (
        <div className={classes.menu}>
          <ProductList productDetails={dishes} />
        </div>
      )}
      {activeState.comment && (
        <div style={{ paddingBottom: "1em" }}>
          <CommentList
          restaurantId = {restaurantDetails.id}
           userId= {userId}
           />
        </div>
      )}
    </div>
  );
}

export default Restaurant;
