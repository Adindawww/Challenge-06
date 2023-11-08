import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchData: []
}

const authSearchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchAdinda: (state, action) => {
            state.searchData = action.payload;
        },
    }
});


export const { setSearchAdinda } = authSearchSlice.actions;
export default authSearchSlice.reducer;