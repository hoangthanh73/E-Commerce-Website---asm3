import bannerImage from '../../images/banner1.jpg';

// Component banner của trang Home
const Banner = () => {
    return (
        <div
            className='w-100'
            style={{
                height: '50vh', minHeight: '300px',
                background: `url(${bannerImage}) top / cover no-repeat`,
            }}>
            <div className='container h-100'>
                <div className='h-100 d-flex justify-content-start align-items-center'>
                    <div className='fst-italic text-uppercase' style={{ maxWidth: '360px' }}>
                        <p className='text-secondary'>new inspiration 2024</p>
                        <h1 className='h1'>20% of on new season</h1>
                        <button className='btn btn-dark rounded-0 fs-5 fst-italic fw-light'>Browse collections</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;