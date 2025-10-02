"use client";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

const links = [
  { name: "Products", url: "/", icon: "/order.png", id: 1 },
  { name: "Cart", url: "/cart", icon: "/shopping-cart.png", id: 2 },
  { name: "Profile", url: "/profile", icon: "/user.png", id: 3 },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerNav}>
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            <div
              className={
                pathname.slice(1) === link.url.slice(1)
                  ? styles.activeTab
                  : styles.inactiveTab
              }
            >
              <Image
                src={link.icon}
                alt="icon"
                width={25}
                height={25}
                className={styles.icon}
              />
              {link.name}
            </div>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
