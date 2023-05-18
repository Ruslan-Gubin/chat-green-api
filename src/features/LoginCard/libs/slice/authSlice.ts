import {  createSlice } from "@reduxjs/toolkit";
import { TypeRootState } from "../../../../app/store/store";
import { IAuthState } from "../types/IAuthState";
import { fetchAuthData } from "./authThunk";


const initialState: IAuthState = {
  IdInstance: null,
  ApiTokenInstance: null,
  wid: null,
  loading: false,
  error: null,
  viewsPassworld: false,
  
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {

    viewsPasswordToggle(state) {
      state.viewsPassworld = !state.viewsPassworld
    }

  },
  extraReducers(builder) {
    builder
    .addCase(fetchAuthData.pending, (state) => {
      state.loading = true
      state.error = null
    })
    .addCase(fetchAuthData.rejected, (state) => {
      state.loading = false
      state.error = 'action.error.message'
    })
    .addCase(fetchAuthData.fulfilled, (state, action) => {
      const { inputs, response } = action.payload
      state.wid = response.wid
      state.ApiTokenInstance = inputs.token
      state.IdInstance = inputs.instance
      state.loading = false
    }) 


  },
    

});

export const selectAuth = (state: TypeRootState) => state.authSlice;

export const authAction = authSlice.actions;

export const authReducer = authSlice.reducer;