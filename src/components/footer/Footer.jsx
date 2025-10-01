import styles from "./Footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <footer className={styles.footer}>
      <nav>
        <ul>
          <li>
            <Link href="#">Conditions of Use</Link>
          </li>
          <li>
            <Link href="#">Privacy Notice</Link>
          </li>
          <li>
            <Link href="#">Interest-Based Ads</Link>
          </li>
        </ul>
      </nav>
      <div>©1996-2021, Amazon.com, Inc. or its affiliates</div>
    </footer>
  );
}

export default Footer;
