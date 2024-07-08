import { configureStore } from "@reduxjs/toolkit";
import popupSlice from "./components/popup/popupSlice";
import productListSlice from "./pages/shop/productList/productListSlice";
import shopSlice from "./pages/shop/shopSlice";
import detailSlice from "./pages/detail/DetailSlice";
import loginSlice from "./pages/login/LoginSlice";
import cartSlice from "./pages/cart/CartSlice";
import chatSlice from "./components/chat/chatSlice";

const store = configureStore({
    reducer: {
        popup: popupSlice,
        productList: productListSlice,
        shop: shopSlice,
        detail: detailSlice,
        login: loginSlice,
        cart: cartSlice,
        chat: chatSlice
    }
});

export default store;