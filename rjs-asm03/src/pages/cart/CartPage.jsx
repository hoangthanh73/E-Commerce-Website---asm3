import { converseNum } from "../../API/requests";
import { useSelector, useDispatch } from "react-redux";
import { updateCart, deleteCart } from "./CartSlice";
import { useNavigate } from 'react-router-dom';
import BannerComponent from "../../layout/BannerComponent";

// component hiện thị cart page
const CartPage = () => {
    const dispatch = useDispatch();
    const cartList = useSelector(state => state.cart);
    const navigate = useNavigate();

    // lấy email của người dùng hiện tại đang đăng nhập
    const userMail = useSelector(state => state.login.currentUser.email)

    // lấy danh sách sản phẩm trong giỏ hàng của người dùng đang đăng nhập
    const userCarts = cartList.filter(e => e.userMail === userMail)

    // Tính tổng giá trị của các sản phẩm trong giỏ hàng của người dùng
    const userTotalAmount = userCarts.reduce((acc, cur) => {
        return acc + Number(cur.item.price) * cur.quantity
    }, 0)

    // cập nhật số lượng sản phẩm trong giỏ hàng
    const handleUpdateCart = (id, quantity, userMail) => {
        dispatch(updateCart({ id, quantity, userMail }));
    }

    // lưu sản phẩm trong giỏ hàng vào localStorage
    localStorage.setItem('cartList', JSON.stringify(cartList));

    return (
        <div className='fst-italic'  >
            <BannerComponent title={'CART'} links={['CART']} />
            <div className='container py-5'>
                <h3 className='fs-3 mb-4'>SHOPPING CART</h3>
                <div className='row align-items-start'>
                    <div className='col-lg-8'>
                        {/* kiểm tra giỏ hàng của người dùng nếu có sản phẩm mới hiện thị bảng*/}
                        {userCarts && <table className='text-center table table-borderless table-hover align-middle me-3'>
                            <thead className='table-light'>
                                <tr>
                                    <th>IMAGE</th>
                                    <th className='d-none d-sm-block'>PRODUCT</th>
                                    <th>PRICE</th>
                                    <th>QUANTITY</th>
                                    <th className='d-none d-sm-block'>TOTAL</th>
                                    <th>REMOVE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* render giỏ hàng của người dùng ra giao diện dưới dạng bảng */}
                                {userCarts.map(e =>
                                    <tr key={e.item._id.$oid}>
                                        <td style={{ maxWidth: '100px' }}><img src={e.item.img1} alt="" /></td>
                                        <td className='d-none d-sm-block'><strong>{e.item.name}</strong></td>
                                        <td><p className='text-secondary'>{`${converseNum(e.item.price)} VND`}</p></td>
                                        <td>
                                            <div>
                                                <button className='btn' onClick={() => { handleUpdateCart(e.item._id.$oid, -1, userMail) }}>
                                                    <i className="fa-solid fa-caret-left text-dark"></i>
                                                </button>
                                                <span>{e.quantity}</span>
                                                <button className='btn' onClick={() => { handleUpdateCart(e.item._id.$oid, 1, userMail) }}>
                                                    <i className="fa-solid fa-caret-right text-dark"></i>
                                                </button>
                                            </div>
                                        </td>
                                        <td className='d-none d-sm-block'>
                                            <p className='text-secondary'>{`${converseNum(+ e.item.price * +e.quantity)} VND`}</p>
                                        </td>
                                        <td>
                                            <button className='text-secondary btn' onClick={() => dispatch(deleteCart({ id: e.item._id.$oid, userMail: userMail }))}>
                                                {<i className="fa-regular fa-trash-can"></i>}
                                            </button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>}
                    </div>
                    <div className='col-lg-4 bg-light p-4'>
                        <h3 className='mb-4'>CART TOTAL</h3>
                        <p className='d-flex justify-content-between'>
                            <strong>SUBTOTAL</strong>
                            <span className='text-secondary'>{converseNum(userTotalAmount)} VND</span>
                        </p>
                        <hr />
                        <p className='d-flex justify-content-between align-items-center'><strong>TOTAL</strong>
                            <span>{converseNum(userTotalAmount)} VND</span>
                        </p>
                        <div className='py-3'>
                            <input type="text" placeholder="Enter you coupon" className='form-control rounded-0 text-secondary' />
                            <button type='button' className='btn btn-dark w-100 rounded-0'><i className="fa-solid fa-gift"></i> Apply Coupon</button>
                        </div>
                    </div>
                    <div className="col-lg-8 d-flex justify-content-between p-4 bg-light">
                        <button className='btn btn-light rounded-0' onClick={() => navigate('/shop')}>
                            <i className="me-3 fa-solid fa-arrow-left-long"></i>
                            Continue shopping
                        </button>
                        <button className='btn btn-light border-2 border-dark rounded-0' onClick={() => navigate('/checkout')}>
                            Proceed to checkout
                            <i className="ms-3 fa-solid fa-arrow-right-long"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CartPage;