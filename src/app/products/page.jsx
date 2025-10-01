"use client";
import { useState, useEffect } from "react";
import ProductItem from "../../components/productItem/ProductItem";
import styles from "./page.module.css";

function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => {
        setProducts(result);
      });
  }, []);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Products</h1>
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

export default ProductPage;
