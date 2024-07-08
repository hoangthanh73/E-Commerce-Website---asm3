import { createSlice } from "@reduxjs/toolkit";

// slice của trang login
const loginSlice = createSlice({
    name: 'login',
    initialState: {
        userArr: JSON.parse(localStorage.getItem('userArr')) ?? [],
        currentUser: {}
    }, reducers: {
        // đăng ký tài khoản mới
        onSignUp: (state, action) => {
            state.userArr.push(action.payload)
        },
        // khi người dùng đăng nhập
        onLogin: (state, action) => {
            state.currentUser = state.userArr.filter((item) => {
                return item.email === action.payload.email && item.password === action.payload.password
            })[0] ?? {};
        },
        // khi người dùng đăng xuất
        onLogout: (state) => {
            state.currentUser = {}
        }
    }
})

export const { onSignUp, onLogin, onLogout } = loginSlice.actions;
export default loginSlice.reducer