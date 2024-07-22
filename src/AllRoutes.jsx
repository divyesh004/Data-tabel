import React from "react";
import { Route, Routes } from "react-router";
import ProductList from "./component/ProductList";
import ProductDetails from "./component/ProductDetails";
import EditProduct from "./component/EditProduct";
import DeleteProduct from "./component/DeleteProduct";
import Addproductpage from "./component/Addproductpage";
function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductList />}></Route>
        <Route path="/productdetails/:id" element={<ProductDetails />}></Route>
        <Route path="/editproduct/:id" element={<EditProduct />}></Route>
        <Route path="/deleteproduct/:id" element={<DeleteProduct />}></Route>
        <Route path="/addproduct/:id" element={<Addproductpage />}></Route>
      </Routes>
    </div>
  );
}

export default AllRoutes;
