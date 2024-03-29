import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg fixed-top bg-light'>
            <div className='container'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link'>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/shop' className='nav-link'>Shop</Link>
                    </li>
                </ul>
                <Link to='/' className='navbar-brand'>BOUTIQUE</Link>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <Link to='/cart' className='nav-link'>
                            <i className="fa-solid fa-cart-flatbed me-1"></i>
                            Cart</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/login' className='nav-link'>
                            <i className="fa-solid fa-user me-1"></i>
                            Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;

