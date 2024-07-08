import { Link } from "react-router-dom";
import { converseNum } from "../../../API/requests";
import HoverImage from "../../../components/UI/HoverImage";
import { useSelector, useDispatch } from "react-redux";
import {changeDetailProduct} from '../../detail/DetailSlice';

const ProductList = () => {
    const filteredProducts = useSelector(state => state.shop.filteredProducts);
    const allProducts = useSelector(state => state.productList.products.productList);
    const dispatch = useDispatch();

    // thay đổi danh mục
    const handleClickItem = (id, category) => {
        dispatch(changeDetailProduct({ allProducts, id, category }))
    }

    return (
        <ul className='row ps-0'>
            {/* kiểm tra và hiện thị danh sách sản phẩm đã lọc */}
            {filteredProducts.length ? filteredProducts
                .map(product => {
                    return (
                        <li key={product._id.$oid} className='col-lg-4 col-md-6 col-12 g-3'>
                            <Link to={`/detail/${product._id.$oid}`} onClick={() => { handleClickItem(product._id.$oid, product.category) }}>
                                <HoverImage>
                                    <img src={product.img1} alt={product.name} className='mb-3' />
                                    <div className='text-center'>
                                        <h5 className='mb-2 fs-5 text-dark'>{product.name}</h5>
                                        <p className='text-secondary'>{converseNum(product.price) + ' VND'}</p>
                                    </div>
                                </HoverImage>
                            </Link>
                        </li>
                    )
                }) : <li><h4>Không có sản phẩm nào phù hợp!</h4></li>}
        </ul >
    )
}

export default ProductList;