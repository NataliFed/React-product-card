import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface ProductCartInterface {
    id: number;
    title: string;
    count?: number;
}

interface CartStateInterface {
    total: number,
    products: ProductCartInterface[]
}

const initialState: CartStateInterface = {
    total: 0,
    products: [],
}

export const cartSlice = createSlice({
    name: 'cart',
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

                state.total += 1;

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

export const { setProducts, addProduct } = cartSlice.actions

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer