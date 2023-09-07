import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const puppyApi = createApi({
    reducerPath: 'puppyApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://fsa-puppy-bowl.herokuapp.com/api/2307-FSA-ET-WEB-FT-SF/'}),
    endpoints: (builder) => ({
        getPlayers: builder.query({
            query: () => `players`,
        }),
        getPlayersByName : builder.query({
            query:(name) => `players/${name}`,
        })
    }),
})

export const {useGetPlayersQuery, useGetPlayersByNameQuery} = puppyApi;