import { Link, json, useLoaderData } from "react-router-dom";
import User from "../Components/User";

const Product = () => {
  const products = useLoaderData();

  return (
    <div className="product">
      <h1 className="product-header">Low MOQ & Ready to ship</h1>
      <div className="card">
        {products.map((product) => (
          <Link
            to={`/products/${product.id}`}
            className="link"
            key={product.id}
          >
            <div className="card-item">
              <p className="card-header">{product.title}</p>
              <img src={product.image} alt="" className="card-photo" />
              <p className="card-description">{product.description}</p>
              <h2 className="card-price">${product.price}</h2>
              <User userID={product.id} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Product;

export const loader = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    // error handling
    throw json({message : "Can't get our products now. "}, {status : 500})
  } else {
    const products = await res.json();
    return products;
  }
};
