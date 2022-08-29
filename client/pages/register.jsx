import styles from '../styles/Register.module.css';
import { useState } from 'react';
import Router from 'next/router';
import axios from 'axios';
const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost:5000/api/auth/register',
        credentials
      );
      Router.push('/login');
    } catch (error) {
      console.log(error);
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
          <h2 className={styles.text}>Register</h2>
          <form className={styles.form}>
            <input
              onChange={handleChange}
              type="text"
              id="username"
              placeholder="username"
              className={styles.input}
            />
            <input
              onChange={handleChange}
              type="text"
              id="email"
              placeholder="email"
              className={styles.input}
            />
            <input
              onChange={handleChange}
              type="password"
              id="password"
              placeholder="password"
              className={styles.input}
            />
            <button className={styles.button} onClick={handleClick}>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
