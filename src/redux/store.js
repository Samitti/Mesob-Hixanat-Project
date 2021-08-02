import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import movieReducer from "../redux/movieSlice";

export default configureStore({
    reducer: {
        user : userReducer,
        movies: movieReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});