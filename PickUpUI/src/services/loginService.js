import { SYSTEM_ERROR } from "../config/CONSTANTS";
import axios, { AxiosResponse }from 'axios'
import { GET_USER_DETAILS, POST_LOGIN_USER} from "./CONSTANTS";

/**
 * Function to fetch all the users.
 */
  
 
export const postLogin = (loginRequest) => {
  return new Promise((resolve, reject) => {
    try {
       
      // do an SDK, DB call or API endpoint axios call here and return the promise.
      axios 
      .post(POST_LOGIN_USER(), loginRequest
      )
      .then(res => 
        {
         resolve(res);
         console.log("THIS IS THE RESPONSE",res.data.message)
         console.log("this is response of login service",res.status);
      })
      .catch((err) => {
        reject(err);
      });
    } catch (error) {
      console.error("in questionsService > getChoicesOfQuestion, Err===", error);
      reject(SYSTEM_ERROR);
    }
  });
};
