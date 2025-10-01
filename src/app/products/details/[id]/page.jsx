"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import styles from "./page.module.css";

function ProductDetailsPage() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  const getSingleProduct = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${params.id}`
      );
      const result = await response.json();
      setProduct(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  const renderStars = (rating) => {
    const percentage = (rating / 5) * 100;

    return (
      <div className={styles.starsContainer}>
        <span className={styles.starsBackground}>★★★★★</span>
        <span
          className={styles.starsFilled}
          style={{ width: `${percentage}%` }}
        >
          ★★★★★
        </span>
      </div>
    );
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>Loading product details...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>
          <h2>Product Not Found</h2>
        </div>
      </div>
    );
  }

  return (
    <section className={styles.container}>
      <div className={styles.productDetails}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.productImage}
        />

        <div>
          <div className={styles.category}>{product.category}</div>
          <h1 className={styles.title}>{product.title}</h1>

          <div className={styles.ratingSection}>
            <div className={styles.rating}>
              {renderStars(product.rating.rate)}
              <span className={styles.ratingText}>
                {product.rating.rate} ({product.rating.count} reviews)
              </span>
            </div>
          </div>

          <div className={styles.price}>${product.price}</div>

          <div className={styles.description}>
            <h2>Description</h2>
            <p>{product.description}</p>
          </div>

          <button className={styles.cartButton}>Add to Cart</button>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailsPage;
