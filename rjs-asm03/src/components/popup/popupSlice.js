import { createSlice } from "@reduxjs/toolkit";

// slice của popup component
const popupSlice = createSlice({
    name: 'popup',
    initialState: {
        isPopup: false,
        popupProduct: {}
    },
    reducers: {
        // hiện thị popup
        showPopup: (state, action) => {
            state.isPopup = true;
            state.popupProduct = action.payload
        },
        // ẩn popup
        hidePopup: (state) => {
            state.isPopup = false;
            state.popupProduct = {}
        }
    }
})

export const { showPopup, hidePopup } = popupSlice.actions;
export default popupSlice.reducer;