import { combineReducers } from "@reduxjs/toolkit";
import { viewerReducer } from "@/entities";
import {
  chatHeaderReducer,
  contactReducer,
  chatContentReducer,
  sendMessageReducer,
} from "@/features";

export const rootReducer = combineReducers({
  viewer: viewerReducer,
  chatHeader: chatHeaderReducer,
  contactsSlice: contactReducer,
  chatContentSlice: chatContentReducer,
  sendMessageSlice: sendMessageReducer,
});
