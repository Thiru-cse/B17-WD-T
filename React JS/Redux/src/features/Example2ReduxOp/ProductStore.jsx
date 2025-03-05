import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from './ProductSlice'

export const productStore = configureStore({
  reducer: { proReducer: ProductReducer },
});