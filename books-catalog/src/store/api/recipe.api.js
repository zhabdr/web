import { api } from "./api";

export default recipeApi=api.injectEndpoints({
   endpoints:builder=>({
    // getRecipes:builder.query({
    //     query:()=>'/'
    // }),
        createRecipe:builder.mutation({
              query:(recipe)=>({
                body:recipe,
                url:'/',
                method:'POST'
              }),
        }),
    
    }),
})
