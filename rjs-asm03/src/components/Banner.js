import { Link } from 'react-router-dom';
import background from '../images/banner1.jpg';

const Banner = () => {
    return (
        <section style={{ background: `url(${background})`, backgroundSize: 'cover', minHeight: '500px', height: '75vh' }}>
            <div className='container h-100 position-relative'>
                <div className='position-absolute top-50 translate-middle-y fst-italic' style={{maxWidth: '360px'}}>
                    <p className='text-uppercase text-secondary'>new inspiration 2024</p>
                    <h1 className='text-uppercase fs-1 mb-3' style={{letterSpacing: '2px'}}>20% of on new season</h1>
                    <Link to='/shop' className='btn btn-dark rounded-0 fw-light'>Browse collections</Link>
                </div>
            </div>
        </section>
    )
}

export default Banner;