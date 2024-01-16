import { configureStore } from '@reduxjs/toolkit';
// import  user  from './userSlice';
import loginReducer from './loginSlice';

const store=configureStore({
 reducer: {
    login: loginReducer,
  //  app:user
 },
});

export default store