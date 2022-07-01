import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface CardStateInterface {
    products: string[]
}

const initialState: CardStateInterface = {
    products: ["product-1", "product-2"],
}

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<string[]>) => {
            return { ...state, products: action.payload }
        },
        addProduct: (state, action: PayloadAction<string>) => {
            return { ...state, products: [...state.products, action.payload] }
        },

    },
})

export const { setProducts, addProduct } = cardSlice.actions

export const selectProducts = (state: RootState) => state.card.products

export default cardSlice.reducer