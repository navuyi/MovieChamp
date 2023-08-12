import { tmdbAPI } from '..'

const movieGenresAPI = tmdbAPI.injectEndpoints({
  endpoints: (builder) => ({
    getMovieGenres: builder.query({
      query: () => `genre/movie/list`,
    }),
  }),
})

export const { useGetMovieGenresQuery } = movieGenresAPI
