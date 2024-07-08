import ReactDom from 'react-dom';

// nền của modal
const Backdrop = props => {
    return (
        <div className='position-fixed top-0 left-0 w-100 vh-100 bg-dark opacity-25'
            style={{ zIndex: '1040' }}
            onClick={props.onHideModal}></div>
    )
}

// Nội dung của modal
const ModalOverlays = props => {
    return (
        <div className='position-fixed top-50 start-50 translate-middle bg-white p-md-3 rounded rounded-3 shadow'
            style={{ width: '90%', maxWidth: '600px', maxHeight: '80vh', zIndex: '1050' }}>
            <div>{props.children}</div>
        </div>
    )
}

const portalElement = document.querySelector('body');

// component Modal chữa nền backdrop và nội dung trong overlays
const Modal = props => {
    return (
        <>
            {ReactDom.createPortal(<Backdrop onHideModal={props.onHideModal} />, portalElement)}
            {ReactDom.createPortal(<ModalOverlays>{props.children}</ModalOverlays>, portalElement)}
        </>
    )
}

export default Modal;