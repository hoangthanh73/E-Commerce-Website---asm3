import { Link } from 'react-router-dom';
import product1 from '../images/product_1.png';
import product2 from '../images/product_2.png';
import product3 from '../images/product_3.png';
import product4 from '../images/product_4.png';
import product5 from '../images/product_5.png';

const img_list = [
    {
        id: 1,
        src: product1,
        alt: 'product1'
    },
    {
        id: 2,
        src: product2,
        alt: 'product2'
    },
    {
        id: 3,
        src: product3,
        alt: 'product3'
    },
    {
        id: 4,
        src: product4,
        alt: 'product4'
    },
    {
        id: 5,
        src: product5,
        alt: 'product5'
    },
]

const Category = () => {
    return (
        <section className='container py-5'>
            <div className='text-center fst-italic my-4'>
                <p className='text-secondary mb-0'>CAREFULLY CREATED COLLECTIONS</p>
                <h2 className='fs-4'>BROWSE OUR CATEGORIES</h2>
            </div>
            <div className='text-center'>
                <ul className='d-flex justify-content-center flex-wrap gap-5 ps-0'>
                    {img_list.map(item => {
                        return (
                            <li key={item.id} className='link-opacity-10'>
                                {/* <Link to='/shop' >day la dong text test</Link> */}
                                <Link to='/shop' className='img-link'><img className='img-fluid' src={item.src} alt={item.alt} /></Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
};

export default Category;