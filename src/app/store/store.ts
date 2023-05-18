import { configureStore } from "@reduxjs/toolkit";
import * as persist from "redux-persist";
import { config, rootReducer } from "./rootReducer";


const persistedReducer = persist.persistReducer(config, rootReducer);

const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) => 

  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        persist.FLUSH,
        persist.REHYDRATE,
        persist.PAUSE,
        persist.PERSIST,
        persist.PURGE,
        persist.REGISTER,
      ],
    },
    }).concat([
      //
    ]),
  
});

const persistor = persist.persistStore(store);

type AppDispatch = typeof store.dispatch;

type TypeRootState = ReturnType<typeof store.getState>;

export type { AppDispatch, TypeRootState };

export { persistor, store };
