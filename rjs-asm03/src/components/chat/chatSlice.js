import { createSlice } from "@reduxjs/toolkit";

// giá trị ban đầu của chat
const chatMessage = [
    {
        addmin: true,
        message: 'Xin chào!'
    }, {
        addmin: true,
        message: 'Tôi có thể giúp gì cho bạn!'
    }
];


// slice của component Chat
const chatSLice = createSlice({
    name: 'chat',
    initialState: chatMessage,
    reducers: {
        // action khi người dùng thêm tin nhắn mới
        addNewMessage: (state, action) => {
            state.push(action.payload)
        }
    }
})

export default chatSLice.reducer;
export const { addNewMessage } = chatSLice.actions;