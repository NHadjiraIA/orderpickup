import { SYSTEM_ERROR } from "../config/CONSTANTS";
import axios from 'axios'
import { POST_ORDER, GET_ORDERS_BY_USER_ID, GET_ORDERS_DONE_BY_USER_ID, GET_ORDERS_NOT_COMPLETED_BY_USER_ID,PUT_ORDER} from "./CONSTANTS";

 
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
  export const getOrdersNotCompletedByUserIdAndRestaurantId = (userId, restaurantId, completed) => {
    return new Promise((resolve, reject) => {
      try {
        axios       
        .get(GET_ORDERS_NOT_COMPLETED_BY_USER_ID(userId,restaurantId,completed))
        .then(res => {
            resolve(res.data);
        })
        .catch((err) => {
          console.log("get orders by user id not completed > axios err=", err);
          reject("Error in getorders by userid  axios!");
        });
      } catch (error) {
        console.error("in order service  > get order, Err===", error);
        reject(SYSTEM_ERROR);
      }
    });
  };
  export const putOrder = (updateOrderDto) => {
    return new Promise((resolve, reject) => {
      try {
        // do an SDK, DB call or API endpoint axios call here and return the promise.
        //userId, codeSurvery, questionId ,answerId, fieldId
        axios 
        .put(PUT_ORDER(),updateOrderDto)
        .then((res) => {
          console.log("putorder > axios res=", res);
          resolve(res.data);
        })
        .catch((err) => {
          console.log("putUserAnswer > axios err=", err);
          reject("Error in putUserAnswer axios!");
        });
      } catch (error) {
        console.error("in questionsService > putUserAnswer, Err===", error);
        reject(SYSTEM_ERROR);
      }
    });
  }