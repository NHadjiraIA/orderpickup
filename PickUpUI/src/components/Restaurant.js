import React, { useState, useEffect } from "react";
import axios from "axios";
import useStyles from "./RestaurantStyle.js";
import ProductList from "./ProductList.js";
import StarIcon from "@material-ui/icons/Star";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import CommentList from "./CommentList.js";
import Button from "@material-ui/core/Button";
import { useLocation } from 'react-router-dom';
import CallEndRoundedIcon from '@material-ui/icons/CallEndRounded';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import RoomIcon from '@material-ui/icons/Room';

import parse from 'html-react-parser';

function Restaurant() {
  // console.log("propssss", props);
  const location = useLocation();
  const classes = useStyles();


const restaurantDetails = location.state.restaurantInfo;
const durationTime = location.state.duration;
// const productDetails = props.product;
// console.log("detailsssssss", restaurantDetails);

  const [activeState, setActiveState] = useState({menu:true, comments: false})

  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3002/api/v1/restaurant/${restaurantDetails.id}/dishes`)
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

  function DishSelection(){
    const dishesList = dishes.map((dish)=>{
      let output = "";
      if (dish.vegan) {
       output += "<p>#Vegan</p>";
      }
      if(dish.gluten){
        output+="<p>#Gluten free</p>";
      }
      if(dish.halal){
        output+="<p>#Halal</p>";
      }
      if(dish.dairy){
        output+="<p>#Dairy free</p>";
      }
      if(dish.nuts){
        output+="<p>#Contains nuts</p>";
      }
      if(dish.marijuana){
        output+="<p>#Contains cannabis</p>";
      }
      
    
      console.log('DISHESES', dish);
      console.log(output);
      return parse(output);
    })
    return dishesList;
  }

  return (
    <>
      <hero className={classes.heroroot}>
        <div className={classes.restaurantcard}>
          <img src="alt"/>

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
                
              <DishSelection/>
                <p>#halal</p>
                <p>#thebest</p>
              </div>
              <div className={classes.distance}>
                <DirectionsWalkIcon></DirectionsWalkIcon>
                <p>{durationTime}</p>
              </div>
            </div>
          </div>
        </div>
        {/* <hr className={classes.linedivider}></hr> */}
        <div className={classes.contactinfo}>
          <h3><RoomIcon/>{restaurantDetails.address}</h3>
          <h3>{restaurantDetails.city} , {restaurantDetails.prov_state}</h3>
          <div >
          <h3> <CallEndRoundedIcon/>{restaurantDetails.phone}</h3></div>
        
          <h3><EmailOutlinedIcon/> {restaurantDetails.email}</h3>
        </div>
      </hero>
      <div className={classes.heroMenu}>
        <Button onClick={() => toggleActive("menu")}>Menu</Button>
        <Button onClick={() => toggleActive("comments")}>Comments</Button>
      </div>
      {activeState.menu && (
        <div className={classes.menu}>
          <ProductList 
          productDetails={dishes}
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
