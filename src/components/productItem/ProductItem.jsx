import styles from "./productItem.module.css";
import Link from "next/link";

function ProductItem({ product }) {
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

  return (
    <Link href={`/products/details/${product.id}`}>
      <section className={styles.productCard}>
        <div className={styles.imageContainer}>
          <img
            src={product.image}
            alt={product.title}
            className={styles.productImage}
          />
        </div>

        <div className={styles.productInfo}>
          <div className={styles.shipping}>Ships to Ukraine</div>
          <h3 className={styles.productTitle}>{product.title}</h3>

          <div className={styles.rating}>
            {renderStars(product.rating?.rate || 5)}
            {product.rating?.count && (
              <span className={styles.reviewCount}>
                {product.rating.count} reviews
              </span>
            )}
          </div>

          <div className={styles.priceContainer}>
            <span className={styles.currentPrice}>${product.price}</span>
          </div>
        </div>
      </section>
    </Link>
  );
}

export default ProductItem;
