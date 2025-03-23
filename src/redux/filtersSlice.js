import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./contactsSlice";

const filtersSlice = createSlice({
name: "filters",
initialState: INITIAL_STATE.filters,
reducers: {
    setFilter(state, action) {
        state.name = action.payload;
    },
},
});

export const { setFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;