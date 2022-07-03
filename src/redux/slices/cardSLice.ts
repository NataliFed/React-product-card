import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface ProductCartInterface {
    id: number;
    title: string;
    count?: number;
}

interface CardStateInterface {
    products: ProductCartInterface[]
}

const initialState: CardStateInterface = {
    products: [],
}

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<ProductCartInterface[]>) => {
            return { ...state, products: action.payload }
        },
        addProduct: (state, action: PayloadAction<ProductCartInterface>) => {
            const productIndex = state.products.findIndex(({ id }) => id === action.payload.id)

            const product = state.products[productIndex];
            if (productIndex > -1) {
                state.products[productIndex] = {
                    ...product,
                    count: product.count ? product.count + 1 : 0,
                };

                return state;
            }
            action.payload.count = 1;

            return {
                ...state,
                products: [...state.products, action.payload]
            }
        },

    },
})

export const { setProducts, addProduct } = cardSlice.actions

export const selectProducts = (state: RootState) => state.card.products

export default cardSlice.reducer