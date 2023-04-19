import { createSlice } from "@reduxjs/toolkit";

const optionsSlice = createSlice({
	name: "options",
	initialState: {
		darkMode: false,
	},
	reducers: {
		toggleDarkMode(state, action) {
			state.darkMode = action.payload;
		},
	},
});

export const { toggleDarkMode } = optionsSlice.actions;
export { optionsSlice };
