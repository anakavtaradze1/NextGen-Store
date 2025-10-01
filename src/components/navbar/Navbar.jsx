"use client";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import Link from "next/link";

const links = [
  { name: "Products", url: "/", id: 1 },
  { name: "Cart", url: "/cart", id: 2 },
  { name: "Profile", url: "/profile", id: 3 },
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
              {link.name}
            </div>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
