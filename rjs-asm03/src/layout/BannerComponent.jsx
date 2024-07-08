import { Link } from "react-router-dom";
import bannerImage from '../images/banner1.jpg';

// banner dùng chung của các pages
const BannerComponent = ({ title, ...links }) => {
    return (
        <div className='w-100' style={{ background: `url(${bannerImage}) top left/cover no-repeat` }}>
            <div className='container'>
                <div className="d-flex justify-content-between align-items-center" style={{ height: '30vh', minHeight: '200px' }}>
                    <h2 className='h1 fst-italic'>{title}</h2>
                    <p>
                        {links.links && links.links.map(e => {
                            return <Link key={Math.random() * 1000} className='link-dark p-2 fst-italic'>{e}</Link>
                        })}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BannerComponent;