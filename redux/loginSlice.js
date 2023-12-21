import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 isLoading: false,
 error: null,
 data: null,
};

const loginSlice = createSlice({
 name: 'login',
 initialState,
 reducers: {
    loginStart: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
 },
});

export const { loginStart, loginSuccess, loginFailure } = loginSlice.actions;

export default loginSlice.reducer;