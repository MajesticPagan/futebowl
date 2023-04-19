import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { footballApi } from "./services/footballApi";
import { optionsSlice } from "./slices/optionsSlice";

export const store = configureStore({
	reducer: {
		[optionsSlice.name]: optionsSlice.reducer,
		[footballApi.reducerPath]: footballApi.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(footballApi.middleware);
	},
});

setupListeners(store.dispatch);
