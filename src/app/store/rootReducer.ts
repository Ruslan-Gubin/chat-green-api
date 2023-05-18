import { combineReducers } from "@reduxjs/toolkit";
import storage from "reduxjs-toolkit-persist/lib/storage";
import { getPersistConfig } from "redux-deep-persist";
import * as reducer from "@/features";


const rootReducer = combineReducers({
  contactsSlice: reducer.contactsReducer,
  authSlice: reducer.authReducer,
  chatHeaderSlice: reducer.chatHeaderReducer,
  chatContentSlice: reducer.chatContentReducer,
  sendMessageSlice: reducer.sendMessageReducer,
});

const config = getPersistConfig({
  key: "root",
  version: 1,
  storage,
  blacklist: [
    'chatContentSlice'
  ],
  rootReducer,
});

export { config, rootReducer };
