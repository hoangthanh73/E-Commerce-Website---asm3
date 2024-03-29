import useFetch from "../hooks/FetchData";

const url = 'https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74'

const converseNum = (str) => {
    const number = Number(str);
    const format = new Intl.NumberFormat('vi-VN').format(
        number,
    )

    return format;
}

const Products = () => {
    const { isLoading, data, error } = useFetch(url);

    return (
        <section className='container py-5'>
            <div className='text-start fst-italic my-4'>
                <p className='text-secondary mb-0'>CAREFULLY CREATED COLLECTIONS</p>
                <h2 className='fs-4'>BROWSE OUR CATEGORIES</h2>
            </div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Something went wrong: {error}</p>}
            {data && data.length ?
                <ul className='row ps-0 mb-0'>
                    {data.map(item => {
                        return (
                            <li key={item._id.$oid} className="card col-md-3 gy-4 border-0">
                                <img src={item.img1} className="card-img-top" alt="..." />
                                <div className="card-body text-center fst-italic">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text text-secondary">{converseNum(item.price) + ' VND'}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul> :
                ''}
        </section>
    )
}

export default Products;