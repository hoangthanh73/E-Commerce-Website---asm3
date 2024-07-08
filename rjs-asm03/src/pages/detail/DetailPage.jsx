import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { converseNum } from "../../API/requests";
import HoverImage from "../../components/UI/HoverImage";
import { addCart } from "../cart/CartSlice";

const DetailPage = () => {
    const [isAddedProduct, setIsAddedProduct] = useState();
    const navigate = useNavigate();
    const param = useParams();
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList.products.productList);
    const cartList = useSelector(state => state.cart);
    const userMail = useSelector(state => state.login.currentUser.email)
    const product = productList.filter(e => e._id.$oid === param.id)[0] || {};
    const relatedProducts = productList.filter(e => e.category === product.category)

    // xử lý khi thêm sản phẩm vào giỏ hàng
    const handleAddToCart = () => {
        if (!userMail) {
            navigate('/login');
            return;
        }
        dispatch(addCart({
            item: product,
            quantity: quantity,
            userMail: userMail
        }))
        setIsAddedProduct('Đã thêm sản phẩm vào giỏ hàng thành công.')
        setTimeout(() => { setIsAddedProduct() }, 2000)
    }
    localStorage.setItem('cartList', JSON.stringify(cartList));

    return (
        <div className='mt-5 py-5 fst-italic'>
            <div className="container">
                <div className="row pb-5">
                    <div className="col-md-6 row align-items-center">
                        <div className='d-flex flex-column gap-4 col-3'>
                            <HoverImage> <img src={product.img1} alt={product.name} /></HoverImage>
                            <HoverImage>   <img src={product.img2} alt={product.name} /></HoverImage>
                            <HoverImage>   <img src={product.img3} alt={product.name} /></HoverImage>
                            <HoverImage>   <img src={product.img4} alt={product.name} /></HoverImage>
                        </div>
                        <div className='col-9'>
                            <HoverImage> <img className='img-fluid' src={product.img1} alt={product.name} /> </HoverImage>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2>{product.name}</h2>
                        <p className='text-secondary lead'>{converseNum(product.price)} VND</p>
                        <p className="text-secondary">{product.short_desc}</p>
                        <div className='mb-4'><strong className='me-2'>CATEGORY: </strong><span>{product.category}</span></div>
                        <div>
                            <p className='mb-0 me-5 d-inline-block'>QUANTITY</p>
                            <div className='d-inline-block'>
                                <button className='btn' onClick={() => setQuantity(Math.max(quantity - 1, 1))}>
                                    <i className="fa-solid fa-caret-left text-dark"></i>
                                </button>
                                <span>{quantity}</span>
                                <button className='btn' onClick={() => setQuantity(quantity + 1)}>
                                    <i className="fa-solid fa-caret-right text-dark"></i>
                                </button>
                            </div>
                            <button className='btn btn-dark border-0 rounded-0' onClick={() => {
                                handleAddToCart()
                            }}>Add to cart</button>

                            {/* kiểm tra nếu đã thêm sản phẩm vào giỏ hàng thì thông báo cho người dùng */}
                            {isAddedProduct && <p className='mt-3'>{isAddedProduct}</p>}
                        </div>
                    </div>
                </div>
                <div>
                    <p className='p-3 mb-4 fs-5 bg-dark text-light d-inline-block'>DESCRIPTION</p>
                    <h3 className='text-dark fs-5 mb-4'>PRODUCT DESCRIPTION</h3>
                    <div className='text-secondary' style={{ whiteSpace: 'pre-wrap' }}>{product.long_desc}</div>
                </div>
                {/* render sản phẩm tương tự ra trình duyệt */}
                {relatedProducts && relatedProducts.length && (
                    <div className='py-4 overflow-auto'>
                        <h3 className='fs-4 mb-3'>RELATED PRODUCTS</h3>
                        <ul className='d-flex justify-content-start align-items-center gap-3 ps-0'>
                            {/* render relatedProducts ra giao diện  */}
                            {relatedProducts.map(e => {
                                return <li key={e._id.$oid} style={{ minWidth: '240px', width: '20%' }}>
                                    <HoverImage>
                                        <img src={e.img1} alt="" />
                                        <div className='text-center my-2'>
                                            <h4 className='fs-5 text-dark'>{e.name}</h4>
                                            <p className='text-secondary'>{converseNum(e.price) + ' VND'}</p>
                                        </div>
                                    </HoverImage>
                                </li>
                            })}
                        </ul>
                    </div>
                )}
            </div >
        </div >
    )
}

export default DetailPage;