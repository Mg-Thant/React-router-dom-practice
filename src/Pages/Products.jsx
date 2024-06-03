import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduts();
  }, []);

  const getProduts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    setProducts(data);
  };

  return (
    <div className="product">
      <h1 className="product-header">Low MOQ & Ready to ship</h1>
      <div className="card">
        {products.map((product) => (
          <Link to={`/products/${product.title}`} className="link" key={product.id}>
            <div className="card-item">
              <p className="card-header">{product.title}</p>
              <img src={product.image} alt="" className="card-photo" />
              <p className="card-description">{product.description}</p>
              <h2 className="card-price">${product.price}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Product;
