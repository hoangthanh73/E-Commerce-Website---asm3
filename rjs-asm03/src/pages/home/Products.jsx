import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { showPopup } from "../../components/popup/popupSlice";

import HoverImage from "../../components/UI/HoverImage";
import { converseNum } from "../../API/requests";

// component Product của Home pages
const Products = () => {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList.products.productList)

    // hiện thị popup thông tin sản phẩm
    const handleOpenPopup = (event, product) => {
        event.preventDefault();
        dispatch(showPopup(product));
    }

    return (
        <section className='py-5 fst-italic'>
            <div className='container'>
                <div>
                    <p className='mb-1 text-secondary'>MADE THE HARD WAY</p>
                    <h2>TOP TRENDING PRODUCTS</h2>
                </div>

                {/* render productList */}
                {productList && productList.length &&
                    <ul className='row ps-0'>
                        {productList.slice(0, 8).map(product => {
                            return (
                                <li key={product._id.$oid} className='col-md-3 col-sm-6 col-12 mb-2'>
                                    <Link to='/' onClick={(event) => { handleOpenPopup(event, product) }}>
                                        <HoverImage>
                                            <img src={product.img1} alt={product.name} className='mb-3 image-fluid' />
                                            <div className='text-center'>
                                                <h5 className='mb-2 fs-5 text-dark'>{product.name}</h5>
                                                <p className='text-secondary'>{converseNum(product.price) + ' VND'}</p>
                                            </div>
                                        </HoverImage>
                                    </Link>
                                </li>

                            )
                        })}
                    </ul>}
            </div>
        </section>
    )
}

export default Products;