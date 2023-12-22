// import { useNavigation } from "@react-navigation/native";
import { LOGIN_FAILURE,LOGIN_SUCCESS } from "./constants";

const initialState = {
    isLoggedIn:false
   };
   
const loginReducer = (state = initialState, action) => {
    // const navigation=useNavigation();
    switch (action.type) {
       case LOGIN_SUCCESS:
        console.log('triggered')
        // const navigateAction = navigation.navigate('Next',{
        //     screen:'Tab1',
        //     params:{
        //         screen:'Home',
        //         params:{
        //                 role:role,
        //             catNames:catNames}
        //     }
        //   })
         return {
           ...state,
           isLoggedIn: true,
        //    username: action.payload,
        //    error: null,
         };
       case LOGIN_FAILURE:
        console.log('triggered')

         return {
           ...state,
           isLoggedIn: false,
        //    username: null,
        //    error: action.payload,
         };
       default:
         return state;
    }
   };

export default loginReducer