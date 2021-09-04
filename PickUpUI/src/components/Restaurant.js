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
// import parse from "html-react-parser";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heroroot: {
    display: "flex",
    flexDirection: "row",

    height: "17em",
    // backgroundColor: "#6b78be",
    backgroundColor: "#57cc99",

    paddingLeft: "11.5em",
    paddingRight: "10em",
    paddingTop: "90px",
  },
  restaurantcard: {
    width: "70%",
    display: "flex",
    flexDirection: "row",
    "& img": {
      padding: "1em",
    },
  },
  restaurantinfo: {
    paddingRight: "1em",
    marginTop: "1em",
    marginBottom: "1em",
    // border: "red 2px solid",
  },
  restaurantName: { paddingLeft: "1.6em" },

  tagsAndDistance: {
    display: "flex",
    flexDirection: "row",
    marginTop: "0.4em",
    // border: "solid blue 2px",
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
    width: "30%",
    paddingLeft: "1em",
    paddingRight: "1em",
    borderLeft: "white solid 2px",
    marginTop: "1em",
    marginBottom: "1em",
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
  // console.log("propssss", props);
  const location = useLocation();
  const classes = useStyles();

  const restaurantDetails = location.state.restaurantInfo;
  const durationTime = location.state.duration;
  // const productDetails = props.product;
  // console.log("detailsssssss", restaurantDetails);
  const [value, setValue] = useState(2);
  const [activeState, setActiveState] = useState({
    menu: true,
    comments: false,
  });

  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:3002/api/v1/restaurant/${restaurantDetails.id}/dishes`
      )
      .then((res) => {
        console.log("Dishes", res.data);

        setDishes(res.data);
      })
      .catch((err) => {});
  }, []);

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
    <>
      <hero
        className={classes.heroroot}
        style={{ backgroundColor: "#38A3A5", color: "white" }}
      >
        <div className={classes.restaurantcard}>
          <img src={restaurantDetails.thumbnail_url} alt="thumbnail" />
          <div className={classes.restaurantinfo}>
            <h2 className={classes.restaurantName}>
              {restaurantDetails.title}
            </h2>
            <Box component="fieldset" mb={-2} borderColor="transparent">
              <Rating name="read-only" value={4} readOnly />
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
          <h3>
            <RoomIcon />
            {restaurantDetails.address}
          </h3>
          <h3>
            {restaurantDetails.city} | {restaurantDetails.prov_state}
          </h3>
          <br></br>
          <div>
            <h3>
              <CallEndRoundedIcon />
              {restaurantDetails.phone}
            </h3>
          </div>

          <h3>
            <EmailOutlinedIcon /> {restaurantDetails.email}
          </h3>
        </div>
      </hero>
      <div className={classes.heroMenu}>
        <Button onClick={() => toggleActive("menu")} disableElevation>
          Menu
        </Button>
        <Button onClick={() => toggleActive("comments")} disableElevation>
          Comments
        </Button>
      </div>
      {activeState.menu && (
        <div className={classes.menu}>
          <ProductList productDetails={dishes} />
        </div>
      )}
      {activeState.comment && (
        <div>
          <CommentList />
        </div>
      )}
    </>
  );
}

export default Restaurant;
