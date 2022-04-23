import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import MovieApi from '../../common/apis/MovieApi';
import {ApiKey} from '../../common/apis/MovieApiKey'; 

 export const fetchAsyncMovies = createAsyncThunk(`movies/fetchAsyncMovies`, async() =>{
    const movieText = "Avengers";
    const response = await MovieApi.get(`?apiKey=${ApiKey}&s=${movieText}&type=movie`)
    return response.data;
 })


const initialState = { 
    movies:{}
}
const movieSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{
        addMovies:(state,{payload}) =>{
            state.movies  = payload;
        },

    },
    extraReducers:{
        [fetchAsyncMovies.pending]:()=>{
            console.log('pending')
        },
        [fetchAsyncMovies.fulfilled]:(state,{payload}) =>{
            console.log('fetched successfully');
            return {...state,movies:payload}
        },
        [fetchAsyncMovies.rejected]:()=>{
            console.log('rejected')
    },
}
    
})

export const { addMovies ,filterMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;