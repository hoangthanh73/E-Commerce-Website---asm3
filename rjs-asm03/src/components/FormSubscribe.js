import { Link } from "react-router-dom";

const FormSubscribe = () => {
    return (
        <section className='container py-5 mb-5'>
            <div className='fst-italic text-center mx-auto' style={{ maxWidth: '480px', width: '100%' }}>
                <h3>SUBSCRIBE TO OUR NEWSLETTER AND ENJOY 15% OFF*</h3>
                <form className=''>
                    <div className='d-flex flex-column mb-3'>
                        <label htmlFor='subs-email' className='text-secondary mb-1'>Insert your email here</label>
                        <input id='subs-email'
                            className='p-2 text-center'
                            style={{
                                outline: 'none',
                                border: 'none',
                                borderBottom: 'solid 2px #000'
                            }}
                            type='text' />
                    </div>
                    <Link className='btn btn-dark rounded-0 px-5 py-2'>SUBSCRIBE NOW</Link>
                </form>
            </div>
        </section>
    )
};

export default FormSubscribe;