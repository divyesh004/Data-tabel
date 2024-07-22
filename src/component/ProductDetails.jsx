import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8000/product/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  return (
    <div className="container product-details-container">
      <div className="row mt-5">
        <div className="col-12 text-center">
          <h1>ProductDetails Page</h1>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-8 col-md-12 p-0">
          <img
            className="d-block w-25 m-auto"
            src={product.image}
            alt="First slide"
          />
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="product-info">
            <h1 className="product-title">{product.title}</h1>
            <h5 className="product-price">${product.price}</h5>
            <h6 className="product-category">{product.category}</h6>
            <p className="product-description">{product.description}</p>

            <div className="justify-content-between d-flex w-100 p-0 ms-0 ">
              <Link to={`/editproduct/${product.id}`} className="edit-link">
                EditProduct
              </Link>
              <Link to={`/addproduct/${product.id}`} className="edit-link">
                AddProduct
              </Link>
              <Link to={`/deleteproduct/${product.id}`} className="edit-link">
                DeleteProduct
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
