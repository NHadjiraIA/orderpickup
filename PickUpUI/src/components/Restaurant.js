import React from "react";
import useStyles from './RestaurantStyle.js'
import ProductList from './ProductList.js'
import StarIcon from '@material-ui/icons/Star';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import { Link } from 'react-router-dom';

function Restaurant() {
  const classes = useStyles();

  return (
    <>
      <hero className={classes.heroroot}>
        <div className={classes.restaurantcard}>
          <img src='https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'/>
          <div className={classes.restaurantinfo}>
            <h2>Restaurant Name</h2>
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
            <StarIcon fontSize='large'/><StarIcon fontSize='large'/><StarIcon fontSize='large'/><StarIcon fontSize='large'/><StarIcon fontSize='large'/>
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
          <h3>address</h3>
          <h3>city, prov</h3>
          <h3>country</h3>
          <h3>phone number</h3>
          <h3>email</h3>
        </div>
      </hero>
      <div className={classes.heroMenu}>
        {/* <h3>Menu</h3> */}
        <Link to='/restaurant/menu'>Menu</Link>
        <Link to='/restaurant/comments'>Comments</Link>


      </div>
      {/* <div className={classes.menu}>
        <ProductList />
      </div> */}
    </>

    
    // <div/>
  );
}

export default Restaurant;
