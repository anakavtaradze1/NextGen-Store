"use client";
import { useState, useEffect } from "react";
import CartItem from "../../components/cartItem/CartItem";
import styles from "./page.module.css";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    document.title = "Shopping Cart";
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => {
        setCartItems(result);
      });
  }, []);

  const handleRemoveItem = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Shopping Cart</h1>

      <div className={styles.cartHeader}>
        <h2 className={styles.productHeader}>PRODUCT</h2>
        <h2 className={styles.quantityHeader}>QUANTITY</h2>
        <h2 className={styles.priceHeader}>PRICE</h2>
      </div>

      <div className={styles.cartItems}>
        {cartItems.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            onRemove={handleRemoveItem}
          />
        ))}
      </div>

      {cartItems.length === 0 && (
        <div className={styles.emptyCart}>
          <p>Your cart is empty</p>
        </div>
      )}
    </main>
  );
}

export default CartPage;
