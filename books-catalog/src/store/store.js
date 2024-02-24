import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { reducer as FavoriteReducer } from "../favorites/favorites.slice";
import { api } from "./api/api";
import { GetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";


const reducers=combineReducers({
favorites:FavoriteReducer,
[api.reducerPath]:api.reducer
})

export const store=configureStore({
    reducer:reducers,
    // middleware:(GetDefaultMiddleware)=>
    // GetDefaultMiddleware().concat(api.middleware),
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})
