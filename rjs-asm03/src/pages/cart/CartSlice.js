import { createSlice } from "@reduxjs/toolkit";

// slice của cart component
const cartSlice = createSlice({
    name: 'cart',
    initialState: JSON.parse(localStorage.getItem('cartList')) ?? [],
    reducers: {
        // sự kiện khi thêm sản phẩm vào cargiỏ hàngt
        addCart: (state, action) => {
            const index = state.findIndex(e => e.item._id.$oid === action.payload.item._id.$oid && e.userMail === action.payload.userMail)
            if (index !== -1) {
                state[index].quantity += action.payload.quantity;
            } else {
                state.push({ item: action.payload.item, quantity: action.payload.quantity, userMail: action.payload.userMail });
            }
        },
        // Sự kiện khi cập nhật số lượng sản phẩm trong giỏ hàng
        updateCart: (state, action) => {
            const index = state.findIndex(e =>
                e.userMail === action.payload.userMail &&
                e.item._id.$oid === action.payload.id
            )
            if (index !== -1) {
                const newQuantity = state[index].quantity + action.payload.quantity;
                if (newQuantity >= 0) {
                    state[index].quantity = newQuantity;
                }
            }
        },
        // Sự kiện khi xóa sản phẩm khỏi giỏ hàng
        deleteCart: (state, action) => {
            const index = state.findIndex(e => e.item._id.$oid === action.payload.id && e.userMail === action.payload.userMail)
            console.log(index);
            state.splice(index, 1);
        }
    },
})

export const { addCart, updateCart, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;