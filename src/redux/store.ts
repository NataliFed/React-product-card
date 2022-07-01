import { configureStore } from '@reduxjs/toolkit'
import cardSLice from './slices/cardSLice'
// ...

export const store = configureStore({
  reducer: {
    card: cardSLice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch