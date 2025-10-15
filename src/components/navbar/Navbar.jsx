"use client";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { useAppSelector } from "@/lib/hooks";
import { selectTotalQuantity } from "@/lib/slices/cartSlice";

const links = [
  { name: "Products", url: "/", icon: "/order.png", id: 1 },
  { name: "Cart", url: "/cart", icon: "/shopping-cart.png", id: 2 },
  { name: "Profile", url: "/profile", icon: "/user.png", id: 3 },
];

const Navbar = () => {
  const pathname = usePathname();
  const cartItemsCount = useAppSelector(selectTotalQuantity);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerNav}>
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            <div
              className={
                (link.name === "Products" &&
                  (pathname === "/" || pathname === "/products")) ||
                pathname === link.url
                  ? styles.activeTab
                  : styles.inactiveTab
              }
            >
              <div className={styles.iconContainer}>
                <Image
                  src={link.icon}
                  alt="icon"
                  width={25}
                  height={25}
                  className={styles.icon}
                />
                {link.name === "Cart" && cartItemsCount > 0 && (
                  <span className={styles.cartBadge}>{cartItemsCount}</span>
                )}
              </div>
              {link.name}
            </div>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
