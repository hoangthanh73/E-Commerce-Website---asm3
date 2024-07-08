import { Outlet } from "react-router-dom";
import BannerImage from '../../images/banner1.jpg';

// phần layout dùng chung của trang login
const LoginPage = () => {
    return (
        <div className='py-5' style={{ background: `#e6e6e6 url(${BannerImage}) repeat-y fixed center` }}>
            <div className='container d-flex justify-content-center align-items-center'>
                <Outlet />
            </div>
        </div >
    )
}

export default LoginPage;