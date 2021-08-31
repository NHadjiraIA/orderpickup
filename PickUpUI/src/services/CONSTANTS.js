 //base address
 export const BASE_ADDRESS = () => 'http://localhost:3000'
 
 export const GET_ALL_DISHS = () => `${BASE_ADDRESS()}/api/v1/tests`;
 export const POST_LOGIN_USER = ()=>BASE_ADDRESS()+'/api/v1/login';
 export const GET_USER_DETAILS = (phone) => BASE_ADDRESS() + '/api/v1/users?email='+phone;
 export const POST_USER =()=>BASE_ADDRESS()+'/api/v1/users';