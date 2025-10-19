import styles from "./profile.module.css";
import Image from "next/image";
import Logout from "../../components/logout/page";

export const metadata = {
  title: "Profile",
};

const ProfilePage = async () => {
  const response = await fetch("https://fakestoreapi.com/users/1");
  const user = await response.json();

  return (
    <main className={styles.profileContainer}>
      <header className={styles.profileHeader}>
        <Image
          src="/man.png"
          alt="Profile Image"
          width={100}
          height={100}
          className={styles.profileImage}
        />
        <div>
          <h1 className={styles.profileTitle}>
            {user.name.firstname} {user.name.lastname}
          </h1>
          <div className={styles.profileInfo}>
            <span className={styles.profileLabel}>Username:</span>
            {user.username}
          </div>
        </div>
      </header>
      <section>
        <div className={styles.profileInfo}>
          <span className={styles.profileLabel}>Email:</span> {user.email}
        </div>
        <div className={styles.profileInfo}>
          <span className={styles.profileLabel}>Phone:</span> {user.phone}
        </div>
      </section>
      <address className={styles.profileAddress}>
        <span className={styles.profileLabel}>Address:</span>
        <div>
          {user.address.number} {user.address.street}
        </div>
        <div>
          {user.address.city}, {user.address.zipcode}
        </div>
      </address>
      <Logout />
    </main>
  );
};

export default ProfilePage;
