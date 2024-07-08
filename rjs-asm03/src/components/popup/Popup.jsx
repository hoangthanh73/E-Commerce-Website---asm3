import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { converseNum } from '../../API/requests';

import Modal from '../UI/Modal';
import { hidePopup } from './popupSlice';

// component Popup sản phẩm
const Popup = () => {
    const isPopup = useSelector(state => state.popup.isPopup);
    const product = useSelector(state => state.popup.popupProduct)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // ẩn popup thông tin sản phẩm
    const onHideModal = (event) => {
        event.preventDefault();
        dispatch(hidePopup());
    }

    return (
        <>
            {/* kiểm tra trạng thái của isPopup để hiện thị hoặc ẩn popup */}
            {isPopup && <Modal onHideModal={onHideModal}>
                <div className='position-relative p-4 fst-italic'>
                    <div className="row align-items-start">
                        <div className="col-md-4">
                            <img src={product.img1} alt='...' className='img-fluid' />
                        </div>
                        <div className="col-md-8">
                            <h4 className='h4'>{product.name}</h4>
                            <p className='text-secondary fs-5'>{converseNum(product.price)} VND</p>
                            <p className='text-secondary' style={{
                                display: '-webkit-box',
                                WebkitLineClamp: '4',
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden'
                            }}>{product.short_desc}</p>
                            <button type='button' className='btn btn-dark rounded-0' onClick={() => { navigate(`/detail/${product._id.$oid}`) }}>
                                <i className="me-2 fa-solid fa-cart-flatbed me-1"></i>
                                View Detail</button>
                        </div>
                    </div>
                    <button type='button'
                        className='position-absolute end-0 top-0 btn'
                        onClick={onHideModal}>
                        <i className="fs-3 fa-solid fa-xmark"></i>
                    </button>
                </div>
            </Modal >}
        </>
    )
}

export default Popup;