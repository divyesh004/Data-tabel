import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function DeleteProduct() {
  const { id } = useParams();
  const [deleteproduct, setddeleteProduct] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/product/${id}`)
      .then((response) => setddeleteProduct(response.data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  const handledelete = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:8000/product/${id}`)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="container product-details-container">
        <div className="row mt-5">
          <div className="col-12 text-center">
            <h1>deletepage Page</h1>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-8 col-md-12 p-0">
            <div className="image" style={{ marginLeft: "30%" }}>
              <img
                src={deleteproduct.image}
                alt=""
                height={200}
                width={200}
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="product-info">
              <h1 className="product-title">{deleteproduct.title}</h1>
              <h5 className="product-price">${deleteproduct.price}</h5>
              <h6 className="product-category">{deleteproduct.category}</h6>
              <p className="product-description">{deleteproduct.description}</p>

              <div className="justify-content-between d-flex w-100 p-0 ms-0 ">
                <button className="edit-link border-0" onClick={handledelete}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteProduct;
