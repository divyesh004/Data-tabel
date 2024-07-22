import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// Make sure to import the CSS file

function ProductList() {
  const [prodata, setprodata] = useState([]);
  const [filter, setfilter] = useState("");
  const [sort, setsort] = useState(null);
  const [page, setpage] = useState(1);
  const [search, setsearch] = useState(null);

  useEffect(() => {
    const params = {
      _sort: "price",
      _order: sort,
      _page: page,
      _limit: 5,
      q: search,
    };
    if (filter) {
      params.category = filter;
    }
    axios
      .get("http://localhost:8000/product", { params })
      .then((response) => setprodata(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [filter, sort, page, search]);

  let searchoperation = (e) => {
    setTimeout(() => {
      setsearch(e.target.value);
    }, 2000);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3 p-0">
          <div className="sidebar">
            <div
              className="searchbar"
              style={{ marginLeft: "0%", marginTop: "30%" }}
            >
              <input
                type="text"
                placeholder="Search"
                className="form-control w-100"
                onChange={(e) => searchoperation(e)}
              />
            </div>
            <div className="product-bar mt-5">
              <h5 className="text-dark">Category:</h5>
              <hr style={{ width: "150px" }} />
              <select
                className="form-select"
                onChange={(e) => setfilter(e.target.value)}
              >
                <option value="">Please Enter Your Choice</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="women's clothing">Women's Clothing</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
              </select>
            </div>
            <div className="price mt-5">
              <h5>Price:</h5>
              <hr style={{ width: "150px" }} />
              <div className="d-flex justify-content-between">
                <Button
                  variant="outline-primary"
                  onClick={() => setsort("asc")}
                >
                  Low to High
                </Button>
                <Button
                  variant="outline-primary"
                  onClick={() => setsort("desc")}
                >
                  High to Low
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-9 homepage">
          <div className="product-grid">
            {prodata.map((e) => (
              <Link
                to={`./productdetails/${e.id}`}
                style={{ textDecoration: "none" }}
                key={e.id}
              >
                <div className="product-card">
                  <img src={e.image} alt="" className="product-image img-fluid" height={200} width={200} />
                  <p className="product-title">{e.title}</p>
                  <p className="product-price">${e.price}</p>
                  <p className="product-category">{e.category}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="pagination mt-4">
            <Button
              disabled={page === 1}
              onClick={() => setpage(page - 1)}
              variant="primary"
            >
              Previous
            </Button>
            <Button variant="secondary" className="mx-2">
              {page}
            </Button>
            <Button
              disabled={page === 4}
              onClick={() => setpage(page + 1)}
              variant="primary"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;

