import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './features/counter'
import { tmdbAPI } from './api'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    [tmdbAPI.reducerPath]: tmdbAPI.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbAPI.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
