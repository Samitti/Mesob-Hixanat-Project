import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getMoviesAsync = createAsyncThunk('movies/getMoviesAsync', 
    async () => {
        const response = await fetch('http://localhost:4000/movies');
        if (response.ok) {
            const movies = await response.json();
            return { movies }
        }
    });
    
const initialState = []

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    extraReducers: {
        [getMoviesAsync.fulfilled]: (state, action) => {
            return action.payload.movies;
        }
    }
});

export default movieSlice.reducer;

