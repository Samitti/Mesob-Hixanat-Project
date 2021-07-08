import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recommend: null,
    newMesob: null,
    original: null,
    trending: null,
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.recommend = action.payload.recommend;
            state.newMesob = action.payload.newMesob;
            state.original = action.payload.original;
            state.trending = action.payload.trending;
        },
    },
});

export const { setMovies } = movieSlice.actions;

export const selectRecommend = (state) => state.movie.recommend;
export const selectNewMesob = (state) => state.movie.newMesob;
export const selectOriginal = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;

export default movieSlice.reducer;
