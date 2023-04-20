import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import storage from "redux-persist/lib/storage";
import {
	persistReducer,
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";

import { footballApi } from "./services/footballApi";
import { optionsSlice } from "./slices/optionsSlice";

const persistConfig = {
	key: "root",
	storage: storage,
	blacklist: [footballApi.reducerPath],
};

const rootReducers = combineReducers({
	[optionsSlice.name]: optionsSlice.reducer,
	[footballApi.reducerPath]: footballApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware({
			serializableCheck: {
				ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(footballApi.middleware);
	},
});

const persistor = persistStore(store);

setupListeners(store.dispatch);

export { store, persistor };
