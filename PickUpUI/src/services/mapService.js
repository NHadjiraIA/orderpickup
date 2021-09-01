import { SYSTEM_ERROR } from "../config/CONSTANTS";
import axios from 'axios'
import { GET_ALL_RESTAURANTS } from "./CONSTANTS";

/**
 * Function to fetch all the users.
 */
export const getAllRestaurants = () => {
  // console.log("userServices > getAllUsers called...");
  // return new Promise((resolve, reject) => {
    // try {
      // do an SDK, DB call or API endpoint axios call here and return the promise.
     return axios
      .get('http://localhost:3002/api/v1/restaurants')
      .then((res) => {
        // console.log("getAllUsers > axios res=", res);
        // console.log(res.data);
        return res.data;
      })
      .catch((err) => {
        // console.log("getAllUsers > axios err=", err);
        // reject("Error in getAllrESTAURANTS axios!");
      });
    // } catch (error) {
    //   console.error("in userServices > getAllUsers, Err===", error);
    //   // reject(SYSTEM_ERROR);

    // }
  // });
};
