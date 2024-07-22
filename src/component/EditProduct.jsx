import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router";

const initalvalue = {
  image: "",
  title: "",
  price: "",
  category: "",
  description: "",
};
function EditProduct() {
  const [formdata, setformdata] = useState(initalvalue);

  const { title, image, price, category, description } = formdata;

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/product/${id}`)
      .then((response) => setformdata(response.data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  const handlchange = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };

  const handlsubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/product/${id}`, formdata)
      .then((res) => {
        setformdata(res.data);
        alert("Product updated successfully");
        setformdata({
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
        <div className="row">
          <div className="col-12 text-center">
            <h1>EditProduct Page</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-4 m-auto mt-5">
            <Form className="form-update" onSubmit={handlsubmit}>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Image Url"
                  className="w-50"
                  name="image"
                  value={image}
                  onChange={handlchange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Title"
                  className="w-50"
                  name="title"
                  value={title}
                  onChange={handlchange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Price"
                  className="w-50"
                  name="price"
                  value={price}
                  onChange={handlchange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Category"
                  className="w-50"
                  name="category"
                  value={category}
                  onChange={handlchange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Description"
                  className="w-50"
                  name="description"
                  value={description}
                  onChange={handlchange}
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

export default EditProduct;
