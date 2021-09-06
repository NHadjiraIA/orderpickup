import { SYSTEM_ERROR } from "../config/CONSTANTS";
import axios from 'axios'
import { POST_PAYMENT } from "./CONSTANTS";

 
export const postPayment = (payment) => {
  return new Promise((resolve, reject) => {
    try {
      axios       
      .post(POST_PAYMENT(),payment)
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
