import { useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Avatar from "../UI/Avatar";
import avatarPic from '../../images/avatar.png';
import { addNewMessage } from "./chatSlice";

// component hiện thị chat floating 
function ChatWidget() {
    const newMessageRef = useRef();
    const dispatch = useDispatch();

    // lấy message từ store
    const chatMessage = useSelector(state => state.chat)

    // Sự kiện khi người dùng gửi tin nhắn đi
    const handleSendMessage = (event) => {
        event.preventDefault();
        dispatch(addNewMessage({ addmin: false, message: newMessageRef.current.value }))
        newMessageRef.current.value = '';
    }

    return (
        <div className='position-fixed z-1 bg-white border shadow rounded d-none d-md-flex flex-column justify-content-between'
            style={{ bottom: '12%', right: '4%', width: '576px', maxWidth: '80%', height: '80%', maxHeight: '500px' }} >
            <div className='p-4 row'>
                <h3 className='col-sm-6 fs-5 fw-bold'>Customer Support</h3>
                <div className='col-sm-6 text-sm-end'>
                    <Link to="" className='btn btn-light fst-italic rounded-0'>Let's Chat App</Link>
                </div>
            </div>
            <div className="p-3 fst-italic d-flex flex-column me-5" style={{ flex: '1' }}>
                {/* render message ra giao diện */}
                {chatMessage && chatMessage.length && chatMessage.map((e) => {
                    return (
                        <div key={Math.random() * 1000}
                            className={`d-flex align-items-start gap-3 mb-1 ${e.addmin ? 'justify-content-start' : 'justify-content-end'}`}>
                            {e.addmin && <Avatar avatar={avatarPic} />}
                            <p className={`mb-0 p-2 rounded-2 ${e.addmin ? 'bg-light' : 'bg-primary text-light'}`}
                                style={{ maxWidth: '300px' }}>{e.message}</p>
                        </div>
                    )
                })}
            </div>
            <form action="" onSubmit={handleSendMessage}>
                <div className="p-4 bg-light border-top rounded-bottom d-flex align-items-center justify-content-start gap-2">
                    <div>
                        <Avatar avatar={avatarPic} />
                    </div>
                    <input type="text" ref={newMessageRef}
                        className="form-control fst-italic"
                        placeholder="Enter Message!"
                        style={{ maxWidth: '250px' }} />
                    <div className="">
                        <label className="btn btn-sm" htmlFor="input-file">
                            <i className="fa-solid fa-paperclip button"></i>
                            <input type="file" id='input-file' className='d-none' />
                        </label>
                        <i className="btn btn-sm fa-solid fa-face-smile"></i>
                        <i className="btn btn-sm text-primary fa-solid fa-paper-plane"></i>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ChatWidget;