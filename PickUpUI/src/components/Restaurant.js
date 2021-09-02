import React, { useState } from "react";
import useStyles from "./RestaurantStyle.js";
import ProductList from "./ProductList.js";
import StarIcon from "@material-ui/icons/Star";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import CommentList from "./CommentList.js";
import Button from "@material-ui/core/Button";

import CallEndRoundedIcon from '@material-ui/icons/CallEndRounded';

function Restaurant(props) {
  // console.log("propssss", props);
  const classes = useStyles();


const restaurantDetails = props.restaurant;
const productDetails = props.product;
// console.log("detailsssssss", restaurantDetails);

  const [activeState, setActiveState] = useState({menu:true, comments: false})

  const toggleActive = (currentState) => {
    // setActiveState({...activeState, currentState: true})
    if (currentState === "menu") {
      setActiveState({ menu: true, comment: false });
    } else {
      setActiveState({ menu: false, comment: true });
    }
  };

  return (
    <>
      <hero className={classes.heroroot}>
        <div className={classes.restaurantcard}>
          <img src={restaurantDetails.thumbnail_url}/>

          {/* <img src={props.restaurant.img} alt="thumbnail"/> */}
          <div className={classes.restaurantinfo}>
            <h2>{restaurantDetails.title}</h2>
            {/* <div class="rating-send">
              <div class="star-buttons">
                <div class="star-rating">
                  <div class="rating">
                    <span class="rating__result">{rating}
                      {for (let i = 0; i < rating; i++) {
                        <i class="rating__star fas fa-star"></i>
                      } for (let i = rating; i < 5; i++) {
                        <i class="rating__star far fa-star"></i>
                      }
                      }
                    </span>
                  </div>
                </div>
              </div>
            </div> */}
            <StarIcon fontSize="large" />
            <StarIcon fontSize="large" />
            <StarIcon fontSize="large" />
            <StarIcon fontSize="large" />
            <StarIcon fontSize="large" />
            <>6.5k</>
            <div className={classes.tagsAndDistance}>
              <div className={classes.tags}>
                <p>#vegetariand</p>
                <p>#halal</p>
                <p>#thebest</p>
                <p>#nut free</p>
              </div>
              <div className={classes.distance}>
                <DirectionsWalkIcon></DirectionsWalkIcon>
                <p>5-10 min</p>
              </div>
            </div>
          </div>
        </div>
        {/* <hr className={classes.linedivider}></hr> */}
        <div className={classes.contactinfo}>
          <h4>{restaurantDetails.address}</h4>
          <h3>{restaurantDetails.city} , {restaurantDetails.prov_state}</h3>
          <div className= "phone"> <CallEndRoundedIcon/>
          <h3>Call us @ {restaurantDetails.phone}</h3></div>
         
          <h3>Email us: {restaurantDetails.email}</h3>
        </div>
      </hero>
      <div className={classes.heroMenu}>
        <Button onClick={() => toggleActive("menu")}>Menu</Button>
        <Button onClick={() => toggleActive("comments")}>Comments</Button>
      </div>
      {activeState.menu && (
        <div className={classes.menu}>
          <ProductList 
          productDetails={productDetails}
          />
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
