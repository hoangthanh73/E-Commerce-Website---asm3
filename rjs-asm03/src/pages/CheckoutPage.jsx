import BannerComponent from '../layout/BannerComponent'
import { useSelector } from 'react-redux';
import { converseNum } from '../API/requests';
import { Fragment } from 'react';

// page checkout
const CheckoutPage = () => {
    const cartList = useSelector(state => state.cart);
    const currentUser = useSelector(state => state.login.currentUser)
    const cartWithUser = cartList.filter(e => e.userMail === currentUser.email)

    // tính tiền tất cả các sản phẩm trong giỏ hàng
    const calcTotalAmount = (arr) => {
        return arr.reduce((accumulator, currentValue) =>
            accumulator + Number(currentValue.item.price) * currentValue.quantity, 0)
    }


    return (
        <div className='mt-5'>
            <BannerComponent title='CHECKOUT' links={['HOME', 'CART', 'CHECKOUT']} />
            <div className='container fst-italic py-5'>
                <h3 className='mb-4'>BILLING DETAILS</h3>
                <div className="row text-secondary">
                    <div className="col-lg-7 mb-4 mb-lg-0">
                        <form action="">
                            <div className="mb-4">
                                <label htmlFor="fullname" className="form-label">FULL NAME:</label>
                                <input type="text" className="form-control rounded-0" id="fullname" placeholder="Enter Your Full Name Here!" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="form-label">EMAIL:</label>
                                <input type="email" className="form-control rounded-0" id="email" placeholder="Enter Your Email Here!" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone-number" className="form-label">PHONE NUMBER:</label>
                                <input
                                    type='tel'
                                    pattern="[0]{1}[0-9]{9}"
                                    className="form-control rounded-0"
                                    id="phone-number"
                                    placeholder="Enter Your Phone Number Here!" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="address" className="form-label">ADDRESS:</label>
                                <input type="address" className="form-control rounded-0" id="address" placeholder="Enter Your Address Here!" />
                            </div>

                        </form>
                    </div>
                    <div className="col-lg-5">
                        <div className='bg-light p-4'>
                            <h3 className='mb-4 text-dark'>YOUR ORDER</h3>
                            <ul className='ps-0 overflow-auto' style={{ maxHeight: '200px' }}>
                                {cartWithUser && cartWithUser.length > 0 && cartWithUser.map(item =>
                                    <Fragment key={Math.random() * 1000} >
                                        <li className='d-flex justify-content-between'>
                                            <strong className='me-2 text-dark'>{item.item.name}</strong>
                                            <span>{`${converseNum(item.item.price)} VND x ${item.quantity}`}</span>
                                        </li>
                                        <hr />
                                    </Fragment>
                                )}
                            </ul>
                            <div className='d-flex justify-content-between fs-5'>
                                <strong className="text-dark">TOTAL</strong>
                                <span className='ms-auto'>{`${converseNum(calcTotalAmount(cartList))} VND`}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button type='button' className='btn btn-dark rounded-0 fst-italic fs-5'>Place Order</button>
                </div>
            </div>
        </div>
    )
}

export default CheckoutPage;