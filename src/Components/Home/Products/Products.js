import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  // const {user} = useAuth();

  useEffect(() => {

    fetch("./productAll.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  
  return (
    <div className="container my-5">
      <h1 className="text-center my-5">
        <strong>BROWSE</strong> MODELS
      </h1>
      <div className="row">
        {products.slice(0, 6).map((product) => (
          <div key={product.id} className="col-md-4 mt-5">
            <div className="card h-100">
              <img src={product.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <h6>{product.price}</h6>
                <p className="card-text">{product.describtion}</p>
              </div>
              <Link to="/allProducts">
                <div className="text-center p-3">
                  <Link to={`/products/${product.id}`}>
                    <div className="text-center p-3">
                      <button className="btn btn-info">Appointment</button>

                    </div>
                  </Link>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
