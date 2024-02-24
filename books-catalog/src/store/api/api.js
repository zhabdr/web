import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { recipeApi } from './recipe.api'
const API_URL='https://www.googleapis.com/books/v1/volumes?q=&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU&maxResults=40'

export const api=createApi({
    reducerPath:'api',
    tagTypes:['Recipe'],
    baseQuery:fetchBaseQuery({
        baseUrl:API_URL

    }),
    endpoints:builder=>({
        getRecipes:builder.query({
            query:()=>'/',
        }),
    
    })
})
export const {useGetRecipesQuery}=api




