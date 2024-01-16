// import { createSlice } from "@reduxjs/toolkit";
// import { loginUser } from "./actions";

// export const user=createSlice({
//     name:'user',
//     initialState:{
//         role:'',
//         catNames:'',
//         loading:false
//     },
//     extraReducers:{
//         [loginUser.pending]:(state)=>{
//             state.loading=true
//         },
//         [loginUser.fulfilled]:(state)=>{
//             state.loading=false
//             state.role=action.payload.dto.rolename
//         },
//         [loginUser.rejected]:(state)=>{
//             state.loading(false)
//         }
//     }
// })

// export default user.reducer;