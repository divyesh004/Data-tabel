import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Addproductpage() {
  const [AddDtata, setAddData] = useState({
    image: "",
    title: "",
    price: "",
    category: "",
    description: "",
  });

  const { image, title, price, category, description } = AddDtata;

  const handlechange = (e) => {
    const { name, value } = e.target;
    setAddData({ ...AddDtata, [name]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/product", AddDtata)
      .then((res) => {
        setAddData(res.data)
        alert("data add succesfully...")

        setAddData({
          image: "",
          title: "",
          price: "",
          category: "",
          description: "",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 text-center">
            <h1>Addproductpage Page</h1>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-4 m-auto">
            <Form className="form-update" onSubmit={handlesubmit}>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Image Url"
                  className="w-50"
                  onChange={handlechange}
                  name="image"
                  value={image}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Title"
                  className="w-50"
                  onChange={handlechange}
                  name="title"
                  value={title}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Price"
                  className="w-50"
                  onChange={handlechange}
                  name="price"
                  value={price}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Category</Form.Label>
                <Form.Select
                  defaultValue="Choose..."
                  onChange={handlechange}
                  name="category"
                  value={category}
                >
                  <option value="">Please Enter Your Choice</option>
                  <option value="men's clothing">Men's Clothing</option>
                  <option value="women's clothing">Women's Clothing</option>
                  <option value="jewelery">Jewelery</option>
                  <option value="electronics">Electronics</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Description"
                  className="w-50"
                  onChange={handlechange}
                  name="description"
                  value={description}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addproductpage;
