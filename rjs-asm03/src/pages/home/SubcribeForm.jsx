import { useNavigate } from "react-router-dom";

// component subcribeForm của home page
const SubcribeForm = () => {
    const navigate = useNavigate();
    return (
        <section className='container'>
            <div className='row py-5'>
                <div className='col-lg-6 fst-italic'>
                    <h3 className='h3'>LET'S BE FRIENDS!</h3>
                    <p className='text-secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <form action="" className='col-lg-6 d-flex flex-column flex-md-row fs-5'>
                    <input type="text"
                        className='p-4 border border-2 border-dark rounded-0'
                        placeholder="Enter your email address" />
                    <button 
                    className='d-inline-block p-4 rounded-0 border border-2 border-dark bg-dark text-secondary fw-bold'
                    onClick={() => {navigate('/login/signup')}}>
                        Subcribe
                    </button>
                </form>
            </div>
        </section>
    )
};

export default SubcribeForm;