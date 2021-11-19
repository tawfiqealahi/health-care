import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";

const Order = () => {
  const { user } = useAuth();
  const [product, setProduct] = useState({});
  const { id } = useParams();
  console.log(user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



  const onSubmit = (data) => {
    data.email = user?.email;
    console.log(data.email);
    data.status = "pending";
  
    console.log(data);
  };

  useEffect(() => {
    fetch(`./productAll.json/${id}`)
      .then((res) => res.json())
      .then((result) => setProduct(result));
  }, [id]);

  return (
    <div>
      <div className="container my-5">
        <div className="row container">
          <div className="col-md-4">
            <div className="card h-100">
              <img src={product.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <h6>{product.price}</h6>
                <p className="card-text">{product.describtion}</p>
              </div>
            </div>
          </div>
          <div className="col-md-8 p-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("email")}
                placeholder="Buyer Email Id"
                defaultValue={user.email}
                className="p-2 m-2 w-100 input-field"
              />
              <input
                {...register("name")}
                placeholder="Product Name"
                defaultValue={product.title}
                className="p-2 m-2 w-100 input-field"
              />

              <input
                {...register("description")}
                defaultValue={product.describtion}
                placeholder="Description"
                className="p-2 m-2 w-100 input-field"
              />


              <input
                {...register("price", { required: true })}
                placeholder="Price"
                defaultValue={product.price}
                type="price"
                className="p-2 m-2 w-100 input-field"
              />
              <br />

        
              <input
                type="submit"
                value="Appointment Now"
                className="btn btn-info w-50"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
