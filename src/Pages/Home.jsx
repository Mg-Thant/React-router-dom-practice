import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigator = useNavigate();

    const navigateHandler = () => {
        navigator("/products")
    }

    return (
        <div className="home">
            <h1 className="home-text">Welcome from Clothing store</h1>
            <h3>You want to see our Productsd. Please Click the button <button className="button" onClick={navigateHandler}>Get Products</button></h3>
        </div>
    )
}

export default Home;