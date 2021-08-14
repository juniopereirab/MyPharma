import React from "react";
import { Switch, Route } from "react-router-dom";

import CreateProductPage from "./pages/CreateProduct";
import ProductsPage from "./pages/Products";
import StockPage from "./pages/Stock";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={ProductsPage} />
      <Route path="/stock" component={StockPage} />
      <Route path="/create-product" component={CreateProductPage} />
    </Switch>
  );
};

export default Routes;
