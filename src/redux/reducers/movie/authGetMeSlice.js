import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    getMe: []
}


const authGetMeSlice = createSlice({
    name: "getMe",
    initialState,
    reducers: {

        setGetMe: (state, action) => {
            state.getMe = action.payload;
        },
    }
})

export const { setGetMe } = authGetMeSlice.actions;
export default authGetMeSlice.reducer;