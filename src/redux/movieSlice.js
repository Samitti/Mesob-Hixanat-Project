import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getMoviesAsync = createAsyncThunk('movies/getMoviesAsync', 
    async () => {
        const response = await fetch('http://localhost:4000/movies');
        if (response.ok) {
            const movies = await response.json();
            return { movies }
        }
    });
    
const initialState = {
    newMesob: null,
    original: null,
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.newMesob = action.payload.newMesob;
            state.original = action.payload.original;
        },
    },
    extraReducers: {
        [getMoviesAsync.fulfilled]: (state, action) => {
            return action.payload.movies;
        }
    }
});

export const { setMovies } = movieSlice.actions;

export const selectNewMesob = (state) => state.movie.newMesob;
export const selectOriginal = (state) => state.movie.original;

export default movieSlice.reducer;

