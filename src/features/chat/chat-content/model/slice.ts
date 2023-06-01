import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./init";
import { reducers } from "./reducers";
import { extraReducers } from "./extra-reducer";

export const chatContentSlice = createSlice({
  name: "chatContentSlice",
  initialState,
  reducers,
  extraReducers,
});

