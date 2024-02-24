import { api } from "../components/api";

export const bookAPi=api.injectEndpoints({
    endpoints:builder=>({
        getBooks:builder.query({
            query:()=>'/',
        }),
        createBook:builder.mutation({
            query:(book)=>({
               body:book,
               url:'/'
               ,method:'POST'

            })
        })
})
})
