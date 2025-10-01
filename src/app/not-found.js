import Link from "next/link";
import styles from "./not-found.module.css";

function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.notFoundBox}>
        <h1 className={styles.errorCode}>404</h1>
        <h2 className={styles.errorTitle}>Page Not Found</h2>
        <p className={styles.errorMessage}>
          This address does not exist on our website.
        </p>
        <Link href="/" className={styles.homeButton}>
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
