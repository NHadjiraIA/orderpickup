import { SYSTEM_ERROR } from "../config/CONSTANTS";
import axios from 'axios'
import { GET_ALL_BRANCHES } from "./CONSTANTS";

 
// export const postOrder = (order) => {
//   return new Promise((resolve, reject) => {
//     try {
//       axios       
//       .post(POST_ORDER(),order)
//       .then(res => {
//           resolve(res.data);
//       })
//       .catch((err) => {
//         console.log("postorder > axios err=", err);
//         reject("Error in postorder axios!");
//       });
//     } catch (error) {
//       console.error("in add porder > post order, Err===", error);
//       reject(SYSTEM_ERROR);
//     }
//   });
// };
export const getAllBranches = () => {
  return new Promise((resolve, reject) => {
    try {
      axios
      .get(GET_ALL_BRANCHES())
      .then((res) => {
        console.log("getAllBranches > axios res=", res);
        resolve(res.data);
      })
      .catch((err) => {
        reject("Error in getAllBranches axios!");
      });
    } catch (error) {
      console.error("in branchServices > getAllBranches, Err===", error);
      reject(SYSTEM_ERROR);
    }
  });
};
// export const getOrdersByUserId = (userId) => {
//     return new Promise((resolve, reject) => {
//       try {
//         axios       
//         .get(GET_ALL_BRANCHES(userId))
//         .then(res => {
//             resolve(res.data);
//         })
//         .catch((err) => {
//           console.log("get orders by user id  > axios err=", err);
//           reject("Error in getorders by userid  axios!");
//         });
//       } catch (error) {
//         console.error("in order service  > get order, Err===", error);
//         reject(SYSTEM_ERROR);
//       }
//     });
//   };
//   export const getOrdersDoneByUserId = (userId, done) => {
//     return new Promise((resolve, reject) => {
//       try {
//         axios       
//         .get(GET_ORDERS_DONE_BY_USER_ID(userId,done))
//         .then(res => {
//             resolve(res.data);
//         })
//         .catch((err) => {
//           console.log("get orders by user id done > axios err=", err);
//           reject("Error in getorders by userid  axios!");
//         });
//       } catch (error) {
//         console.error("in order service  > get order, Err===", error);
//         reject(SYSTEM_ERROR);
//       }
//     });
//   };
//   export const getOrdersNotCompletedByRestaurantId = (restaurantId, completed) => {
//     return new Promise((resolve, reject) => {
//       try {
//         axios       
//         .get(GET_ORDERS_NOT_COMPLETED_BY_RESTAURANT_ID(restaurantId,completed))
//         .then(res => {
//             resolve(res.data);
//         })
//         .catch((err) => {
//           console.log("get orders by user id not completed > axios err=", err);
//           reject("Error in getorders by userid  axios!");
//         });
//       } catch (error) {
//         console.error("in order service  > get order, Err===", error);
//         reject(SYSTEM_ERROR);
//       }
//     });
//   };
//   export const putOrder = (updateOrderDto) => {
//     return new Promise((resolve, reject) => {
//       try {
//         // do an SDK, DB call or API endpoint axios call here and return the promise.
//         //userId, codeSurvery, questionId ,answerId, fieldId
//         axios 
//         .put(PUT_ORDER(),updateOrderDto)
//         .then((res) => {
//           console.log("putorder > axios res=", res);
//           resolve(res.data);
//         })
//         .catch((err) => {
//           console.log("putUserAnswer > axios err=", err);
//           reject("Error in putUserAnswer axios!");
//         });
//       } catch (error) {
//         console.error("in questionsService > putUserAnswer, Err===", error);
//         reject(SYSTEM_ERROR);
//       }
//     });
//   }