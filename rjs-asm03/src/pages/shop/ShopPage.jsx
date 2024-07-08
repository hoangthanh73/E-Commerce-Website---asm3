import { NavLink, Link, Outlet, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeCategory } from "./shopSlice";
import { useEffect } from "react";
import BannerComponent from "../../layout/BannerComponent";

// shop page của trang web 
const ShopPage = () => {
    const param = useParams();
    const dispatch = useDispatch();
    const allProducts = useSelector(state => state.productList.products.productList);

    // hiện thị sản phẩm theo danh mục
    useEffect(() => {
        dispatch(changeCategory({ category: param, allProducts }));
    }, [param, allProducts, dispatch]);

    return (
        <div className='fst-italic'>
            <BannerComponent title={'SHOP'} links={['SHOP']} />
            <div className="container py-5">
                <div className="row">
                    <nav className='col-12 col-md-4 col-sm-6'>
                        <h2 className='fs-4 mb-3'>CATEGORIES</h2>
                        <ul className='p-0'>
                            <li>
                                <Link className='nav-link bg-dark text-light fw-bold d-block py-2 px-4'>APPLE</Link>
                            </li>
                            <li>
                                <NavLink to='' end className='nav-link d-block px-4 py-2'>All</NavLink>
                            </li>
                            <li>
                                <Link className='nav-link bg-light text-dark fw-bold d-block py-2 px-4'>IPHONE & IMAC</Link>
                            </li>
                            <li>
                                <NavLink to='iphone' className='nav-link d-block px-4 py-2'>Iphone</NavLink>
                            </li>
                            <li>
                                <NavLink to='ipad' className='nav-link d-block px-4 py-2'>Ipad</NavLink>
                            </li>
                            <li>
                                <NavLink to='macbook' className='nav-link d-block px-4 py-2'>MacBook</NavLink>
                            </li>
                            <li>
                                <Link className='nav-link bg-light text-dark fw-bold d-block py-2 px-4' >WIRELESS</Link>
                            </li>
                            <li>
                                <NavLink to='airpod' className='nav-link d-block px-4 py-2'>Airpod</NavLink>
                            </li>
                            <li>
                                <NavLink to='watch' className='nav-link d-block px-4 py-2'>Watch</NavLink>
                            </li>
                            <li>
                                <Link className='nav-link bg-light text-dark fw-bold d-block py-2 px-4' >ORTHER</Link>
                            </li>
                            <li>
                                <NavLink to='mouse' className='nav-link d-block px-4 py-2'>Mouse</NavLink>
                            </li>
                            <li>
                                <NavLink to='keyboard' className='nav-link d-block px-4 py-2'>Keyboard</NavLink>
                            </li>
                            <li>
                                <NavLink to='orther' className='nav-link d-block px-4 py-2'>Other</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className='col-12 col-md-8 col-sm-6'>
                        <form className='d-flex justify-content-between align-items-center mb-3'>
                            <input type="text" placeholder="Enter Search Here!" className='form-control' style={{ maxWidth: '250px' }} />
                            <select className='form-select' style={{ maxWidth: '200px' }}>
                                <option value="">Default Sorting</option>
                                <option value="HightToLow">Price: Low to Hight</option>
                                <option value="hightToLow">price: Hight to Low</option>
                            </select>
                        </form>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ShopPage;