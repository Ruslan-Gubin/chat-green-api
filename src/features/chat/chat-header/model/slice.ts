import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./init";
import { reducers } from "./reducers";
import { extraReducers } from "./extra-reducer";

export const chatHeaderSlice = createSlice({
  name: "chatHeader",
  initialState,
  reducers,
  extraReducers,
});

