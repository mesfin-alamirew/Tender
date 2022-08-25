import styles from '../styles/Login.module.css';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import Router from 'next/router';
import axios from 'axios';
const login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post(
        'http://localhost:5000/api/auth/login',
        credentials
      );
      Router.push('/tender');
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error.response.data });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.title}>Welcome to Habesha Tender</h1>
        <h4 className={styles.subtitle}>The Leading Site for Online Tender</h4>
        <h4 className={styles.subscribe}>Subscribe and Get Started Now!</h4>
        <div className={styles.subscriptionContainer}>
          <div className={styles.subscriptionType}>
            <div className={styles.feature}>
              <div className={styles.headerText}>Service/Feature</div>
              <div className={styles.itemFeature}>Online tender access</div>
              <div className={styles.itemFeature}>Email Alert</div>
              <div className={styles.itemFeature}>Tender Detailon Email</div>
              <div className={styles.itemFeature}>SMS Alert</div>
              <div className={styles.itemFeature}>Email & Phone Support</div>
              <div className={styles.itemFeature} style={{ lineHeight: '1.3' }}>
                Subscription Fee/ Year <br /> (Price Including VAT)
              </div>
            </div>

            <div className={styles.basic}>
              <div className={styles.headerText}>Basic</div>
              <div className={styles.itemFeature}>
                <span className={styles.checkMark}>
                  <i className="fa-solid fa-check"></i>
                </span>
              </div>
              <div className={styles.itemFeature}>
                <span className={styles.xmark}>
                  <i className="fa-solid fa-xmark"></i>
                </span>
              </div>
              <div className={styles.itemFeature}>
                <span className={styles.xmark}>
                  <i className="fa-solid fa-xmark"></i>
                </span>
              </div>
              <div className={styles.itemFeature}>
                <span className={styles.xmark}>
                  <i className="fa-solid fa-xmark"></i>
                </span>
                <div className={styles.itemFeature}>
                  <span className={styles.checkMark}>
                    <i className="fa-solid fa-check"></i>
                  </span>
                </div>
                <div className={styles.itemFeature}>1800.00 Birr/Year</div>
              </div>
            </div>
            <div className={styles.premium}>
              <div className={styles.headerText}>Premium</div>
              <div className={styles.itemFeature}>
                <span className={styles.checkMark}>
                  <i className="fa-solid fa-check"></i>
                </span>
              </div>
              <div className={styles.itemFeature}>
                <span className={styles.checkMark}>
                  <i className="fa-solid fa-check"></i>
                </span>
              </div>
              <div className={styles.itemFeature}>
                <span className={styles.checkMark}>
                  <i className="fa-solid fa-check"></i>
                </span>
              </div>
              <div className={styles.itemFeature}>
                <span className={styles.xmark}>
                  <i className="fa-solid fa-xmark"></i>
                </span>
              </div>
              <div className={styles.itemFeature}>
                <span className={styles.checkMark}>
                  <i className="fa-solid fa-check"></i>
                </span>
              </div>
              <div className={styles.itemFeature}>1500.00 Birr/Year</div>
            </div>
            <div className={styles.advanced}>
              <div className={styles.headerText}>Advanced</div>
              <div className={styles.itemFeature}>
                <span className={styles.checkMark}>
                  <i className="fa-solid fa-check"></i>
                </span>
              </div>
              <div className={styles.itemFeature}>
                <span className={styles.checkMark}>
                  <i className="fa-solid fa-check"></i>
                </span>
              </div>
              <div className={styles.itemFeature}>
                <span className={styles.checkMark}>
                  <i className="fa-solid fa-check"></i>
                </span>
              </div>
              <div className={styles.itemFeature}>
                <span className={styles.checkMark}>
                  <i className="fa-solid fa-check"></i>
                </span>
              </div>
              <div className={styles.itemFeature}>
                <span className={styles.checkMark}>
                  <i className="fa-solid fa-check"></i>
                </span>
              </div>
              <div className={styles.itemFeature}>2500.00 Birr/Year</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.formContainer}>
          <h2 className={styles.text}>Login</h2>
          <form className={styles.form}>
            <input
              type="text"
              id="username"
              onChange={handleChange}
              placeholder="username, email or phone"
              className={styles.input}
            />
            <input
              type="password"
              id="password"
              onChange={handleChange}
              placeholder="password"
              className={styles.input}
            />
            <button
              disabled={loading}
              className={styles.button}
              onClick={handleClick}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default login;
