import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const ProductSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: 'idle',
        error: null
    },
    reducers: {
        fetchProductStart: (state) => {
            state.status = "Loading"
        },
        fetchProductSuccess: (state, action) => {
            state.status = "Success"
            state.data = action.payload
        },
        fetchProductFailure: (state, action) => {
            state.status = "Failed"
            state.error = action.payload
        }
    }
});

export const fetchProduct = () => async (dispatch) => {
    dispatch(fetchProductStart())
    try {
        const res = await axios.get('https://6694b1874bd61d8314c84020.mockapi.io/api/product');
        dispatch(fetchProductSuccess(res.data))
    }catch(error){
        dispatch(fetchProductFailure(error.message))
    }
}
 
export const { fetchProductStart, fetchProductSuccess, fetchProductFailure } = ProductSlice.actions;
export default ProductSlice.reducer;

