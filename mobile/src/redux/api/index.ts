import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_KEY } from '../../config/api'

export const tmdbAPI = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/',
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${API_KEY}`)
    },
  }),
  tagTypes: ['Movies'],
  endpoints: (builder) => ({}),
})
