import styles from '../styles/Topbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Router from 'next/router';
const Topbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const handleClick = (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGOUT' });
    Router.push('/login');
  };
  return (
    <div className={styles.topbar}>
      <div className={styles.topLeft}>
        <Image src="/images/logo.jpg" alt="" width="450px" height="109x" />
      </div>
      <div className={styles.topRight}>
        {user ? (
          <>
            Hello {user.username}
            <div className={styles.login}>
              <button
                className={styles.login}
                onClick={handleClick}
                style={{ cursor: 'pointer' }}
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
            <div className={styles.subscribe}>Register</div>
            <div className={styles.login}>
              <Link href="/login">Login</Link>
            </div>
          </>
        )}
        <div className={styles.help}>
          Help
          <span className={styles.hIcon}>
            {' '}
            <i class="fa-solid fa-caret-down"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
