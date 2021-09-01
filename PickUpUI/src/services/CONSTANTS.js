 //base address
 export const BASE_ADDRESS = () => 'http://localhost:3002'
 
 export const GET_ALL_DISHS = () => `${BASE_ADDRESS()}/api/v1/tests`;
 export const POST_LOGIN_USER = ()=>BASE_ADDRESS()+'/api/v1/login';
 export const POST_USER =()=>BASE_ADDRESS()+'/api/v1/users';

