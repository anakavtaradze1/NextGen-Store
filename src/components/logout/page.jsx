"use client";

import { redirect } from "next/navigation";
import styles from "./page.module.css";

function Logout() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    redirect("/");
  };
  return (
    <button className={styles.logoutButton} onClick={handleLogout}>
      Log Out
    </button>
  );
}

export default Logout;
