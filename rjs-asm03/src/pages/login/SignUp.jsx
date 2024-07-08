import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { onSignUp } from "./LoginSlice";

// component đăng ký tài khoản người dùng của trang login
const SignUp = () => {
    const fullName = useRef();
    const email = useRef()
    const password = useRef()
    const phone = useRef()
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userArr = useSelector(state => state.login.userArr)

    // validate dữ liệu người dùng nhập vào khi đăng ký tài khoản
    const validateForm = () => {
        if (!fullName.current.value || !email.current.value || !password.current.value || !phone.current.value) {
            alert('Tất cả các trường không dược bỏ trống!')
            return false;
        }
        userArr.forEach(e => {
            if (e.email === email.current.value) {
                alert('Email này đã được dùng.')
                return false;
            }
        })
        if (password.current.value.length < 8) {
            alert('Mật khẩu phải ít nhất 8 ký tự.')
            return false;
        }
        return true;
    }

    // reset giá trị các ô input
    const resetForm = () => {
        fullName.current.value = '';
        email.current.value = '';
        password.current.value = '';
        phone.current.value = '';
    }

    // xử lý khi người dùng đăng ký 
    const handleSignUp = (event) => {
        event.preventDefault();
        if (validateForm()) {
            const newUser = {
                fullName: fullName.current.value,
                email: email.current.value,
                password: password.current.value,
                phone: phone.current.value
            }
            dispatch(onSignUp(newUser));
            localStorage.setItem('userArr', JSON.stringify([...userArr, newUser]));
            resetForm();
            navigate('/login');
        }
    }

    return (
        <form onSubmit={(event) => handleSignUp(event)}
            className='p-2 p-md-5 mt-5 bg-body shadow rounded-3 fst-italic'
            style={{ width: '100%', maxWidth: '500px' }}>
            <div className='text-center'>
                <h3 className='fs-2 py-4'>Sign Up</h3>
                <div className='d-flex flex-column justify-content-start'>
                    <input ref={fullName} className='form-control-lg rounded-0 border-bottom-0' type='text' placeholder='Full Name' required />
                    <input ref={email} className='form-control-lg rounded-0 border-bottom-0' type='email' placeholder='Email' required />
                    <input ref={password} className='form-control-lg rounded-0 border-bottom-0' type="password" placeholder="Password" required />
                    <input ref={phone} className='form-control-lg rounded-0' type='tel' pattern="[0]{1}[0-9]{9}" placeholder='Phone' required />
                    <button type="sumit" className='rounded-0 btn btn-dark mt-4 p-3 rounded-0'>SIGN IN</button>
                </div>
                <p className='mt-3'>Login? <Link to='/login' className='text-primary'>Click</Link></p>
            </div>
        </form >
    )
}

export default SignUp;