// import { useNavigation } from "@react-navigation/native";
import { LOGIN_FAILURE,LOGIN_SUCCESS } from "./constants";

import axios from "axios";
// // export const login = (username, password) => async (dispatch) => {
// //     try {
// //       const response = await axios.post('https://api.thehansfoundation.org/profile-service-mongo/api/ProfileEntity/v2/login', {
// //         username: username,
// //         password: password,
// //       });
  
// //       const authToken = response.data.token;
  
// //       // Dispatch a success action with the token
// //       dispatch({
// //         type: LOGIN_SUCCESS,
// //         payload: authToken,
// //       });
// //     } catch (error) {
// //       // Dispatch a failure action with the error message
// //       dispatch({
// //         type: LOGIN_FAILURE,
// //         payload: 'Invalid username or password',
// //       });
// //     }
// //   };



export const handleLogin = async (user, password) => {
    
    try {
       const response = await axios.post('https://api.thehansfoundation.org/profile-service-mongo/api/ProfileEntity/v2/login', {
         username: user,
         password: password,
         resourcecode: "DPF"
       })
       console.log('Login successful:', response.data);
       return{
        type:LOGIN_SUCCESS,
        payload:response.data
       }
       
    } catch (error) {
       // Handle errors
       console.error('Error logging in:', error);
    //    dispatch({type: LOGIN_FAILURE, payload: error});
    }
   };
  