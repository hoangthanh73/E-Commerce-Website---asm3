import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import ChatWidget from '../components/chat/ChatWiget';

// component layout dùng chung cho các pages
const Layout = () => {
    const [isChatPopup, setIsChatPopup] = useState(false);

    // Bật tắt cửa sổ chat floating
    const toggleChatPopup = () => {
        setIsChatPopup(prev => !prev)
    }

    return (
        <div className='position-relative'>
            <Navbar />
            {/* biểu thức điều kiện để ẩn hiện chat wiget */}
            {isChatPopup && <ChatWidget />}
            <button className='d-none d-sm-block btn p-0 mt-3 position-fixed z-3'
                onClick={toggleChatPopup}
                style={{ bottom: '4%', right: '4%' }}>
                <i className="fa-brands fa-facebook-messenger text-primary fs-1"></i>
            </button>
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;