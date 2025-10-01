"use client";
import { useState } from "react";
import styles from "./CartItem.module.css";
import Image from "next/image";

function CartItem({ product, onRemove }) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    setQuantity(quantity - 1);
  };

  const totalPrice = (product.price * quantity).toFixed(2);

  return (
    <main className={styles.cartItem}>
      <div className={styles.productSection}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.productImage}
        />
        <div className={styles.productInfo}>
          <h3 className={styles.productTitle}>{product.title}</h3>
        </div>
      </div>

      <div className={styles.quantitySection}>
        <button
          className={styles.quantityButton}
          onClick={handleDecrease}
          disabled={quantity <= 1}
        >
          -
        </button>
        <span className={styles.quantity}>{quantity}</span>
        <button
          className={styles.quantityButton}
          onClick={handleIncrease}
          disabled={quantity >= 10}
        >
          +
        </button>
      </div>

      <div className={styles.priceSection}>
        <span className={styles.price}>${totalPrice}</span>
      </div>

      <button
        className={styles.removeButton}
        onClick={() => onRemove(product.id)}
      >
        <Image src="/delete.png" alt="Delete" width={25} height={25} />
      </button>
    </main>
  );
}

export default CartItem;
