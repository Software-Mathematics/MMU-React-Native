import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser=createAsyncThunk(
    'loginUser',
    async({detail},{rejectedWithValue})=>{
        const response =await axios.post('https://api.thehansfoundation.org/profile-service-mongo/api/ProfileEntity/v2/login',{
                password: detail.pass,
                resourcecode: detail.resourcecode,
                username: detail.user
              })
              rolecode=response.data.data.dto.rolecode;
              const categories=await axios.get("https://api.thehansfoundation.org/menu-service/api/Menu/v1/get?type=TASK&resourceCode=DPF&role="+rolecode,)
              try{
            return response.data.data.dto.rolename
          
            const catNames = categories.data.data.dtoList.map(item => item.name);
            return role
              }
              catch(error){
                console.log(rejectedWithValue(error))
              }
    }
)