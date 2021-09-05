import { SYSTEM_ERROR } from "../config/CONSTANTS";
import axios from 'axios'
import { GET_COMMENT_BY_RESTAURANT,POST_COMMENT} from "./CONSTANTS";

 
export const postComment = (comment) => {
  return new Promise((resolve, reject) => {
    try {
      axios       
      .post(POST_COMMENT(),comment)
      .then(res => {
          resolve(res.data);
      })
      .catch((err) => {
        console.log("postcomment > axios err=", err);
        reject("Error in postcomment axios!");
      });
    } catch (error) {
      console.error("in addComment > postUser, Err===", error);
      reject(SYSTEM_ERROR);
    }
  });
};

export const getCommentByRestaurant = (restaurantId) => {
  console.log("commmmmmmmmm", restaurantId);
    return new Promise((resolve, reject) => {
      try {
        axios       
        .get(GET_COMMENT_BY_RESTAURANT(restaurantId))
        .then(res => {
            resolve(res.data);
        })
        .catch((err) => {
          console.log("getcommentbyrestaurant > axios err=", err);
          reject("Error in getcommnetsby restaurant axios!");
        });
      } catch (error) {
        console.error("in commentservice > get commnet, Err===", error);
        reject(SYSTEM_ERROR);
      }
    });
  };