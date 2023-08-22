import { useFetchProducts } from "../api/getProducts";
import { ProductDetail } from "./ProductDetail";
import styles from "../App.module.css";
import React from "react";

export const ProductList = ({setCount}) => {
  const { isLoading, error, data } = useFetchProducts();

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className={styles.flex}>
      {data.map((product) => (
        <ProductDetail key={product.id} product={product} setCount={setCount} />
      ))}
    </div>
  );
};
