import { SYSTEM_ERROR } from "../config/CONSTANTS";
import axios from 'axios'
import { POST_ORDER, GET_ORDERS_BY_USER_ID, GET_ORDERS_DONE_BY_USER_ID} from "./CONSTANTS";

 
export const postOrder = (order) => {
  return new Promise((resolve, reject) => {
    try {
      axios       
      .post(POST_ORDER(),order)
      .then(res => {
          resolve(res.data);
      })
      .catch((err) => {
        console.log("postorder > axios err=", err);
        reject("Error in postorder axios!");
      });
    } catch (error) {
      console.error("in add porder > post order, Err===", error);
      reject(SYSTEM_ERROR);
    }
  });
};

export const getOrdersByUserId = (userId) => {
    return new Promise((resolve, reject) => {
      try {
        axios       
        .get(GET_ORDERS_BY_USER_ID(userId))
        .then(res => {
            resolve(res.data);
        })
        .catch((err) => {
          console.log("get orders by user id  > axios err=", err);
          reject("Error in getorders by userid  axios!");
        });
      } catch (error) {
        console.error("in order service  > get order, Err===", error);
        reject(SYSTEM_ERROR);
      }
    });
  };
  export const getOrdersDoneByUserId = (userId, done) => {
    return new Promise((resolve, reject) => {
      try {
        axios       
        .get(GET_ORDERS_DONE_BY_USER_ID(userId,done))
        .then(res => {
            resolve(res.data);
        })
        .catch((err) => {
          console.log("get orders by user id done > axios err=", err);
          reject("Error in getorders by userid  axios!");
        });
      } catch (error) {
        console.error("in order service  > get order, Err===", error);
        reject(SYSTEM_ERROR);
      }
    });
  };