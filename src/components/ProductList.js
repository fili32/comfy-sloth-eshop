import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { sorted_products: products, isGridview: grid } = useFilterContext();
  return (
    <div>
      {grid === false ? (
        <ListView products={products}>product list</ListView>
      ) : (
        <GridView products={products}>products in grid</GridView>
      )}
    </div>
  );
};

export default ProductList;
