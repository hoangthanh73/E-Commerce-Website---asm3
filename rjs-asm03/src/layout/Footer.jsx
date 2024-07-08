import { Link } from "react-router-dom";

// Phần footer dùng chung
const Footer = () => {
    return (
        <footer className='fst-italic bg-dark text-light py-5'>
            <div className='container'>
                <ul className='row'>
                    <li className='col-md-4'>
                        <h3 className='mb-3 h4'>CUSTOMER SERVICES</h3>
                        <div>
                            <Link className='d-block text-light fw-light mb-2'>Help & Contact Us</Link>
                            <Link className='d-block text-light fw-light mb-2'>Returns and Refunds</Link>
                            <Link className='d-block text-light fw-light mb-2'>Online Stores</Link>
                            <Link className='d-block text-light fw-light mb-2'>Terms & Conditions</Link>
                        </div>
                    </li>
                    <li className='col-md-4'>
                        <h3 className='mb-3 h4'>COMPANY</h3>
                        <div>
                            <Link className='d-block text-light fw-light mb-2'>What We Do</Link>
                            <Link className='d-block text-light fw-light mb-2'>Avaliable Services</Link>
                            <Link className='d-block text-light fw-light mb-2'>Latest Posts</Link>
                            <Link className='d-block text-light fw-light mb-2'>FAQs</Link>
                        </div>
                    </li>
                    <li className='col-md-4'>
                        <h3 className='mb-3 h4'>SOCIAL MEDIA</h3>
                        <div>
                            <Link className='d-block text-light fw-light mb-2'>Twitter</Link>
                            <Link className='d-block text-light fw-light mb-2'>Instagram</Link>
                            <Link className='d-block text-light fw-light mb-2'>Facebook</Link>
                            <Link className='d-block text-light fw-light mb-2'>Pinterest</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </footer>
    )
};

export default Footer;
