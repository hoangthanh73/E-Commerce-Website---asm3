import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onLogin } from "./LoginSlice";

// coponent đăng nhập của trang login
const SignIn = () => {
    const dispatch = useDispatch();
    const email = useRef()
    const password = useRef();
    const navigate = useNavigate();
    const userStr = localStorage.getItem('userArr') ?? '[]';
    const userArr = JSON.parse(userStr);

    // xử lý khi người dùng nhấn nút đăng nhập
    const handleSubmit = (event) => {
        event.preventDefault();
        const filteredUser = userArr.filter(e => e.email === email.current.value && e.password === password.current.value);
        if (filteredUser.length) {
            localStorage.setItem('currentUser', JSON.stringify(filteredUser[0]))
            dispatch(onLogin(filteredUser[0]));
            navigate('/');
        } else {
            alert('Email hoặc mật khẩu không hợp lệ.')
            email.current.value = '';
            password.current.value = '';
        }
    }

    return (
        <form onSubmit={(event) => { handleSubmit(event) }}
            className='p-2 p-md-5 mt-5 bg-body shadow rounded-3 fst-italic'
            style={{ width: '100%', maxWidth: '500px' }}>
            <div className='text-center'>
                <h3 className='fs-2 py-4'>Sign In</h3>
                <div className='d-flex flex-column mb-3'>
                    <input className='form-control-lg rounded-0 border-bottom-0' ref={email} type='email' placeholder='Email' required />
                    <input className='form-control-lg rounded-0' ref={password} type="password" placeholder="Password" required />
                    <button type="submit" className='btn btn-dark mt-4 p-3 rounded-0'>SIGN IN</button>
                </div>
                <p>Create an account? <Link to='signUp' className='text-primary'>Sign up</Link></p>
            </div>
        </form >
    )
}

export default SignIn;