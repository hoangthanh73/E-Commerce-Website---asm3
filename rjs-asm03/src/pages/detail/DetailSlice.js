import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
    name: 'detail',
    initialState: {
        detailProduct: {},
        relatedProducts: []
    },
    reducers: {
        // thay đổi sản phẩm trong trang detail
        changeDetailProduct: (state, action) => {
            state.detailProduct = action.payload.allProducts.filter(e => e._id.$oid === action.payload.id)[0];
            state.relatedProducts = action.payload.allProducts.filter(e => 
                e.category.includes(action.payload.category) && 
                e._id.$oid !== action.payload.id);
        }
    }
});

export const { changeDetailProduct } = detailSlice.actions;
export default detailSlice.reducer;