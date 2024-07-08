import { createSlice } from "@reduxjs/toolkit";

// slice của shop page
const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        filteredProducts: []
    },
    reducers: {
        // thay đổi danh mục sản phẩm
        changeCategory: (state, action) => {
            if (action.payload.category.category) {
                state.filteredProducts =
                    action.payload.allProducts.filter(e => e.category.includes(action.payload.category.category));
            } else {
                state.filteredProducts = action.payload.allProducts
            }
        }
    }
})

export default shopSlice.reducer;
export const { changeCategory } = shopSlice.actions;