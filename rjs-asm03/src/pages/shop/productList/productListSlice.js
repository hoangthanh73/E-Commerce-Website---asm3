import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { url } from "../../../API/requests";

// slice của productList lấy dữ liệu từ database 
const productListSlice = createSlice({
    name: 'productList',
    initialState: {
        products: { status: 'idle', productList: [] },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.products.status = 'loading';
            }).addCase(fetchProducts.fulfilled, (state, action) => {
                state.products.productList = action.payload;
                state.products.status = 'idle';
            })
    }
})

const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
})

export { fetchProducts };
export const { filteredWithCategory } = productListSlice.actions;
export default productListSlice.reducer;