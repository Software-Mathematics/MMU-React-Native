// import { useNavigation } from "@react-navigation/native";
// import { LOGIN_FAILURE,LOGIN_SUCCESS } from "./constants";

// const initialState = {
//     isAuthenticated: false,
//     username: null,
//     error: null,
//    };
   
// const loginReducer = (state = initialState, action) => {
    
//     switch (action.type) {
//        case LOGIN_SUCCESS:
//         console.log('triggered')
//          return {
//            ...state,
//            isAuthenticated: true,
//            username: action.payload,
//            error: null,
//          };
//        case LOGIN_FAILURE:
//         console.log('triggered')

//          return {
//            ...state,
//            isAuthenticated: false,
//            username: null,
//            error: action.payload,
//          };
//        default:
//          return state;
//     }
//    };

// export default loginReducer