import { configureStore } from '@reduxjs/toolkit'
import cartSLice from './slices/cartSLice'
// ...

export const store = configureStore({
  reducer: {
    cart: cartSLice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch