import { SYSTEM_ERROR } from "../config/CONSTANTS";
import axios, { AxiosResponse }from 'axios'
import { GET_USER_DETAILS, POST_LOGIN_USER} from "./CONSTANTS";

/**
 * Function to fetch all the users.
 */
  
 
export const postLogin = () => {
  return new Promise((resolve, reject) => {
    try {
       
      // do an SDK, DB call or API endpoint axios call here and return the promise.
      axios 
      .post(POST_LOGIN_USER(),
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

export const getUserDetails = (phone) => {
 return new Promise((resolve, reject) => {
   try {
     // do an SDK, DB call or API endpoint axios call here and return the promise.
     axios 
     
     .get(GET_USER_DETAILS(phone))
     .then(res => 
       {
        resolve(res);
     })
     .catch((err) => {
       console.log("getUserDetails > axios err=", err);
       reject("Error in getUserDetails axios!");
     });
   } catch (error) {
     console.error("in loginService > getUserDetails, Err===", error);
     reject(SYSTEM_ERROR);
   }
 });
};
