import { SYSTEM_ERROR } from "../config/CONSTANTS";
import axios from 'axios'
import { POST_USER} from "./CONSTANTS";

/**
 * Function to fetch all the users.
 */
 
export const postUser = (user) => {
  return new Promise((reject) => {
    try {
      // do an SDK, DB call or API endpoint axios call here and return the promise.
      axios       
      .post(POST_USER(),{user })
      .then(res => {
        console.log("int he post user",res);
      })
      .catch((err) => {
        console.log("postuser > axios err=", err);
        reject("Error in getusers axios!");
      });
    } catch (error) {
      console.error("in addUserService > postUser, Err===", error);
      reject(SYSTEM_ERROR);
    }
  });
};
