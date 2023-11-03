import { combineReducers } from "@reduxjs/toolkit";
import authLoginSlice from "./auth/authLoginSlice";
import authMovieSlice from "./movie/authMovieSlice";
// import authSearchMovieSlice from "./search/authSearchMovieSlice";
import authSearchSlice from "./search/authSearchSlice";

//combine reducer adalah tempat dimana kita men setup
//apa saja reducer yang kita gunakan dalam aplikasi 
export default combineReducers({
    auth: authLoginSlice,
    movie: authMovieSlice,
    search: authSearchSlice,
});