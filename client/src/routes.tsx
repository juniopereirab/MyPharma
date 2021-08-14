import React from "react";
import { Switch, Route } from "react-router-dom";

import CreateProductPage from "./pages/CreateProduct";
import EditProductPage from "./pages/EditProduct";
import ProductDetailPage from "./pages/ProductDetail";
import ProductsPage from "./pages/Products";
import StockPage from "./pages/Stock";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={ProductsPage} />
      <Route path="/stock" component={StockPage} />
      <Route path="/create-product" component={CreateProductPage} />
      <Route path="/edit-product/:id" component={EditProductPage} />
      <Route path="/product/:id" component={ProductDetailPage} />
    </Switch>
  );
};

export default Routes;
