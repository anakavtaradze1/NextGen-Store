"use client";
import { useDispatch } from "react-redux";
import styles from "./CartItem.module.css";
import Image from "next/image";
import {
  increaseQuantity,
  decreaseQuantity,
  deleteFromCart,
} from "../../lib/slices/cartSlice";

function CartItem({ product }) {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseQuantity({ id: product.id }));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity({ id: product.id }));
  };

  const handleRemove = () => {
    dispatch(deleteFromCart({ id: product.id }));
  };

  const totalPrice = (product.price * product.quantity).toFixed(2);

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
        <button className={styles.quantityButton} onClick={handleDecrease}>
          -
        </button>
        <span className={styles.quantity}>{product.quantity}</span>
        <button className={styles.quantityButton} onClick={handleIncrease}>
          +
        </button>
      </div>

      <div className={styles.priceSection}>
        <span className={styles.price}>${totalPrice}</span>
      </div>

      <button className={styles.removeButton} onClick={handleRemove}>
        <Image src="/delete.png" alt="Delete" width={25} height={25} />
      </button>
    </main>
  );
}

export default CartItem;
