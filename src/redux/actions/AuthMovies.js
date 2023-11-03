import http from "../../utils/http";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import { API_ENDPOINTS } from "../../utils/api-endpoints";
import { reduxMovie } from "../../services/movie/get-data-movie";
import { setMovie } from "../reducers/movie/authMovieSlice";
import { http3 } from "../../utils/http3";
import { reduxMovieDetail } from "../../services/movie/get-data-movie-detail";
import { Navigate } from "react-router-dom";
import { reduxMovieSearch } from "../../services/movie/search-data-movie";
import { setSearchAdinda } from "../reducers/search/authSearchSlice";


export const reduxMovieSetail = async (id) => {
    return await http3.get(`${API_ENDPOINTS.DETAIL_MOVIE}${id}`)
}

// default setupnya redux bawan dari redux kalo kita mau pakek dispath
// ya kayak gini mangilanya 
export const MovieAdinda = (page) => (dispatch) => {
    return reduxMovie(page).then((result) => {
        //return console.log(result)
        return dispatch(setMovie(result.data.data));
    }).catch((err) => {
        console.log(err, "err")

    });
}

export const DetailAdinda = (id) => (dispatch) => {
    return reduxMovieDetail(id).then((result) => {
        //return console.log(result)
        return dispatch(setMovie(result.data.data));
    }).catch((err) => {

    });
}

export const SearchAdinda = (query) => (dispatch) => {
    // Navigate(`/search/${query}`);
    window.location.href = `/search/${query}`

}

export const searchMovie = (page, query) => async (dispatch) => {
     return reduxMovieSearch(page, query).then((result) => {
        console.log(result, "ini coba dilihat")
        return dispatch(setSearchAdinda(result));
    }).catch((err) => {
        
    });

};





