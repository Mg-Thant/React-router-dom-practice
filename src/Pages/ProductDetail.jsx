import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  return (
    <div className="product">
      <h1 className="product-header">Low MOQ & Ready to ship</h1>
      <div className="card">
        <div className="card-item details-card-item">
          <p className="card-header details-card-header">{params.title}</p>
          <img
            src="../src/assets/2c7daa663721ff77e2b012b6cebe7aca.jpg"
            alt=""
            className="card-photo details-card-photo"
          />
          <p className="card-description details-card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            laboriosam dolorum esse vitae in est.Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Nesciunt mollitia eius, facere atque
            nemo iure! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Sint ducimus nemo quisquam esse itaque aliquam maxime quia non dicta
            eveniet! Animi cupiditate provident magnam? Similique autem iusto
            incidunt dignissimos, nulla error ipsam, excepturi eveniet ducimus
            accusantium praesentium obcaecati consequuntur dolorum in animi
            tenetur nisi? Quos magni modi ducimus rerum praesentium.
          </p>
          <h2 className="card-price details-card-price">$15.00</h2>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
