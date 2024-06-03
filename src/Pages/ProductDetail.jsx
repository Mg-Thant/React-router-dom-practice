import { json, useLoaderData } from "react-router-dom";
import User from "../Components/User";

const ProductDetail = () => {
  const products = useLoaderData();

  return (
    <div className="product">
      <h1 className="product-header">Low MOQ & Ready to ship</h1>
      <div className="card">
        <div className="card-item details-card-item">
          <p className="card-header details-card-header">{products.title}</p>
          <img
            src={products.image}
            alt=""
            className="card-photo details-card-photo"
          />
          <p className="card-description details-card-description">
            {products.description}
          </p>
          <h2 className="card-price details-card-price">${products.price}</h2>
          <User userID={products.id} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

export const loader = async ({ request, params }) => {
  const res = await fetch(
    `https://fakestoreapi.com/products/${params.productId}`
  );
  if (!res.ok) {
    throw json({ message: "Not found this product" }, { status: 404 });
  } else {
    const product = await res.json();
    return product;
  }
};
