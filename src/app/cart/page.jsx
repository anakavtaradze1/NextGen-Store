"use client";

import { useEffect } from "react";
import { useAppSelector } from "@/lib/hooks";
import CartItem from "@/components/cartItem/CartItem";
import styles from "./page.module.css";
import {
  selectCartProducts,
  selectTotalQuantity,
  selectTotalAmount,
} from "@/lib/slices/cartSlice";

function page() {
  const cartProducts = useAppSelector(selectCartProducts);
  const totalQuantity = useAppSelector(selectTotalQuantity);
  const totalAmount = useAppSelector(selectTotalAmount);

  useEffect(() => {
    document.title = "Shopping Cart";
  }, []);

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.title}>Shopping Cart</h1>
      {cartProducts.length === 0 ? (
        <p className={styles.emptyCart}>Your cart is empty</p>
      ) : (
        <>
          <div className={styles.cartItems}>
            {cartProducts.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </div>

          <div className={styles.totalSection}>
            <div className={styles.totalItem}>
              <span className={styles.totalLabel}>Total Items:</span>
              <span className={styles.totalValue}>{totalQuantity} items</span>
            </div>
            <div className={styles.totalAmount}>
              <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default page;
