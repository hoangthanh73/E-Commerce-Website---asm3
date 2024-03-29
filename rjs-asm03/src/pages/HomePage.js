import Banner from "../components/Banner";
import Category from "../components/Category";
import Products from "../components/Products";
import Service from "../components/Service";
import FormSubscribe from "../components/FormSubscribe";

const HomePage = () => {
    return (
        <main>
            <Banner />
            <Category />
            <Products />
            <Service />
            <FormSubscribe />
        </main>
    )
}

export default HomePage;