import { useNavigate } from 'react-router-dom';

import product1 from '../../images/product_1.png';
import product2 from '../../images/product_2.png';
import product3 from '../../images/product_3.png';
import product4 from '../../images/product_4.png';
import product5 from '../../images/product_5.png';

import HoverImage from '../../components/UI/HoverImage';

const img_list = [product1, product2, product3, product4, product5]

// component category của trang home
const Category = () => {
    const navigate = useNavigate();
    return (
        <section className='my-5'>
            <div className='container'>
                <div className='text-center fst-italic'>
                    <p className='text-secondary mb-1'>CAREFULLY CREATED COLLECTIONS</p>
                    <h2 className='fs-4'>BROWSE OUR CATEGORIES</h2>
                </div>
                <div>
                    <ul className='row row-cols-auto justify-content-center'>
                        {/* duyệt mảng hình ảnh của category */}
                        {img_list.map((item, i) => {
                            return (
                                <li key={i} className='me-4 mb-4' onClick={() => { navigate('/shop') }}>
                                    <HoverImage>
                                        <img src={item} alt={`product_${i + 1}`} />
                                    </HoverImage>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
};

export default Category;