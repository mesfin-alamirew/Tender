import styles from '../styles/Navbar.module.css';
import Image from 'next/Image';
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.menubar}>
        <ul className={styles.menu}>
          <Link href="/">
            <a>
              <li className={styles.menuItem}>
                <i className="fa-solid fa-house"></i>
              </li>
            </a>
          </Link>
          <Link href="/tender">
            <a>
              <li className={styles.menuItem}>tenders</li>
            </a>
          </Link>
          <Link href="/service">
            <a>
              <li className={styles.menuItem}>service</li>
            </a>
          </Link>
          <Link href="/subscribe">
            <a>
              <li className={styles.menuItem}>subscribe</li>
            </a>
          </Link>
          <Link href="/freetender">
            <a>
              <li className={styles.menuItem}>free tenders</li>
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <li className={styles.menuItem}>contact</li>
            </a>
          </Link>
        </ul>
        <div className={styles.postButton}>Post Tenders</div>
      </div>
      <div className={styles.banner}>
        <Image
          src="/images/ht banner101.jpg"
          alt=""
          width="980px"
          height="152px"
        />
      </div>
    </div>
  );
};

export default Navbar;
