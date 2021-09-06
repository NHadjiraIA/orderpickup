import { SYSTEM_ERROR } from "../config/CONSTANTS";
import axios from 'axios'
import { GET_ALL_DISHS, GET_DISHS_BY_RESTAURANT } from "./CONSTANTS";

/**
 * Function to fetch all the users.
 */
export const getAllDishs = () => {
  console.log("userServices > getAllUsers called...");
  return new Promise((resolve, reject) => {
    try {
      // do an SDK, DB call or API endpoint axios call here and return the promise.
      axios
      .get(GET_ALL_DISHS())
      .then((res) => {
        console.log("getAllUsers > axios res=", res);
        resolve(res.data);
      })
      .catch((err) => {
        console.log("getAllUsers > axios err=", err);
        reject("Error in getAllUsers axios!");
      });
    } catch (error) {
      console.error("in userServices > getAllUsers, Err===", error);
      reject(SYSTEM_ERROR);
    }
  });
};
export const getDishByRestaurant = (restaurantId) => {
  return new Promise((resolve, reject) => {
    try {
      axios       
      .get(GET_DISHS_BY_RESTAURANT(restaurantId))
      .then(res => {
          resolve(res.data);
      })
      .catch((err) => {
        console.log("get dishs by user id  > axios err=", err);
        reject("Error in dishs by restaurantid  axios!");
      });
    } catch (error) {
      console.error("in dish service  > get order, Err===", error);
      reject(SYSTEM_ERROR);
    }
  });
};