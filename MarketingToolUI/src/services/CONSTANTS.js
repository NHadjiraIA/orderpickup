 //base address
 export const BASE_ADDRESS = () => 'http://localhost:3002'
 export const GET_BRANCHES_BY_ID = (branchId) => `${BASE_ADDRESS()}/api/v1/branches?id=${branchId}`;
 export const GET_ALL_BRANCHES= () => `${BASE_ADDRESS()}/api/v1/branches`;
 export const POST_LOGIN_USER = ()=>BASE_ADDRESS()+'/api/v1/login';
 export const POST_USER =()=>BASE_ADDRESS()+'/api/v1/users';
 export const POST_COMMENT = () => `${BASE_ADDRESS()}/api/v1/comments`;
 export const GET_COMMENT_BY_RESTAURANT = (restaurantId) => `${BASE_ADDRESS()}/api/v1/comments?restaurantId=${restaurantId}`
 export const GET_ORDERS_BY_USER_ID = (userId) => `${BASE_ADDRESS()}/api/v1/orders?userId=${userId}`
 export const POST_ORDER = (userId) => `${BASE_ADDRESS()}/api/v1/orders`
 export const GET_ORDERS_DONE_BY_USER_ID = (userId,done) => `${BASE_ADDRESS()}/api/v1/orders?userId=${userId}&done=${done}`
 export const GET_ORDERS_NOT_COMPLETED_BY_RESTAURANT_ID = (restaurantId,completed)=> `${BASE_ADDRESS()}/api/v1/orders?restaurantId=${restaurantId}&completed=${completed}`
 export const PUT_ORDER = () => `${BASE_ADDRESS()}/api/v1/orders`;
 export const GET_DISHS_BY_RESTAURANT = (restaurantId) => `${BASE_ADDRESS()}/api/v1/restaurant/${restaurantId}/dishes`
 export const POST_PAYMENT = () => `${BASE_ADDRESS()}/api/v1/payments`;