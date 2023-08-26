
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 

import taskReducer from "./taskReducer";

const persistConfig = {
  key: "root", 
  storage,     
};

const persistedReducer = persistReducer(persistConfig, taskReducer);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export { store, persistor };
