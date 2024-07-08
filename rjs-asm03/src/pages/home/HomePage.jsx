import Banner from './Banner'
import Category from "./Category";
import Products from "./Products";
import Service from './Service';
import SubcribeForm from './SubcribeForm';
import Popup from '../../components/popup/Popup';

const HomePage = () => {
    return (
        <main>
            <Banner />
            <Category />
            <Products />
            <Service />
            <SubcribeForm />
            <Popup />
        </main>
    )
}

export default HomePage;