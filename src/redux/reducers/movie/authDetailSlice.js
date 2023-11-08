import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    detail: []
}


const authDetailSlice = createSlice({
    name: "detail",
    initialState,
    reducers: {
        setDetail: (state, action) => {
            state.detail = action.payload;
        },
    }
})

export const { setDetail } = authDetailSlice.actions;
export default authDetailSlice.reducer;