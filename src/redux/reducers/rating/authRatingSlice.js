import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    token: "",
    isLogin: "",
    user: ""
}


const authRatingSlice = createSlice({
    name: "Rating",
    initialState,
    reducers: {

    }
})


export default authRatingSlice.reducer;