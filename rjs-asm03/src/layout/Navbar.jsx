import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { onLogout } from "../pages/login/LoginSlice";

// phần Navbar dùng chung
const Navbar = () => {
    const currentUser = useSelector(state => state.login.currentUser);
    const dispatch = useDispatch();

    console.log(currentUser)

    // sử kiện khi người dùng đăng xuất
    const handleLogOut = () => {
        dispatch(onLogout());
    }

    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    return (
        <nav className='py-2 position-fixed top-0 w-100 z-3 bg-light'>
            <div className='container'>
                <ul className='fs-4 ps-0 mb-0 d-flex justify-content-between align-items-center gap-3'
                    style={{ fontWeight: '500' }}>
                    <li className='d-none d-md-block'>
                        <NavLink className='nav-link py-2 px-4' to='/'>Home</NavLink>
                    </li>
                    <li className='d-none d-md-block'>
                        <NavLink className='nav-link py-2 px-4' to='/shop'>Shop</NavLink>
                    </li>
                    <li>
                        <Link className='navbar-brand py-2 px-4' to='/'>BOUTIQUE</Link>
                    </li>
                    <li className='d-none d-md-block'>
                        <NavLink className='nav-link py-2 px-4 d-flex align-items-center justify-content-start gap-1' to='/cart'>
                            <i className='me-1 fa-solid fa-cart-flatbed'></i>
                            Cart
                        </NavLink>
                    </li>
                    {currentUser.fullName ?
                        <li className="dropdown d-none d-md-block">
                            <Link className="nav-link dropdown-toggle d-flex justify-content-start align-items-center"
                                onClick={handleLogOut}>
                                <i className='me-1 fa-solid fa-user'></i>
                                {currentUser.fullName.slice(0, 5)}
                            </Link>
                        </li>
                        :
                        <li className='d-none d-md-block'>
                            <NavLink to='/login' className='nav-link'>
                                <i className='me-1 fa-solid fa-user'></i>
                                Login</NavLink>
                        </li>
                    }

                    {/* phần giao diện cho di động */}
                    <li className="d-block d-md-none">
                        <button className="btn fs-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa-solid fa-bars"></i>
                        </button>
                        <ul className="dropdown-menu border-0 rounded-0 w-100 text-center">
                            <li className='border-bottom'>
                                <NavLink className='nav-link py-2 px-4 fs-5' to='/'>Home</NavLink>
                            </li>
                            <li className='border-bottom'>
                                <NavLink className='nav-link py-2 px-4 fs-5' to='/shop'>Shop</NavLink>
                            </li>
                            <li className='border-bottom'>
                                <NavLink className='nav-link py-2 px-4 fs-5' to='/cart'>
                                    <i className='me-1 fa-solid fa-cart-flatbed'></i>
                                    Cart
                                </NavLink>
                            </li>
                            {currentUser.fullName ?
                                <li className='border-bottom'>
                                    <Link className="nav-link py-2 px-4 fs-5 dropdown-toggle"
                                        onClick={handleLogOut}>
                                        <i className='me-1 fa-solid fa-user'></i>
                                        {currentUser.fullName.slice(0, 5)}
                                    </Link>
                                </li>
                                :
                                <li className='border-bottom'>
                                    <NavLink to='/login' className='nav-link py-2 px-4 fs-5'>
                                        <i className='me-1 fa-solid fa-user'></i>
                                        Login</NavLink>
                                </li>
                            }
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;

