import styles from '../styles/Tender.module.css';
import Link from 'next/link';
import axios from 'axios';
import dbConnect from '../util/mongo';
//import Data from '../public/data';
const tender = ({ data }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.category}>
          <h1>Tender Category</h1>
          <ul className={styles.cat}>
            <li className={styles.catItem}>
              <span className={styles.catItem}>
                <i className="fa-solid fa-caret-right"></i>
              </span>
              Accounting and Auditing
            </li>
            <li className={styles.catItem}>
              <span className={styles.catItem}>
                <i className="fa-solid fa-caret-right"></i>
              </span>
              Accounting and Auditing
            </li>
            <li className={styles.catItem}>
              <span className={styles.catItem}>
                <i className="fa-solid fa-caret-right"></i>
              </span>
              Accounting and Auditing
            </li>
            <li className={styles.catItem}>
              <span className={styles.catItem}>
                <i className="fa-solid fa-caret-right"></i>
              </span>
              Agricalture
            </li>
            <li className={styles.catItem}>
              <span className={styles.catItem}>
                <i className="fa-solid fa-caret-right"></i>
              </span>
              Bank Related
            </li>
            <li className={styles.catItem}>
              <span className={styles.catItem}>
                <i className="fa-solid fa-caret-right"></i>
              </span>
              Building Materials
            </li>
            <li className={styles.catItem}>
              <span className={styles.catItem}>
                <i className="fa-solid fa-caret-right"></i>
              </span>
              Cleaning and Janitorial
            </li>
            <li className={styles.catItem}>
              <span className={styles.catItem}>
                <i className="fa-solid fa-caret-right"></i>
              </span>
              Computer and Accesseries
            </li>
            <li className={styles.catItem}>
              <span className={styles.catItem}>
                <i className="fa-solid fa-caret-right"></i>
              </span>
              Construction & It's Machinery
            </li>
            <li className={styles.catItem}>
              <span className={styles.catItem}>
                <i className="fa-solid fa-caret-right"></i>
              </span>
              Consultancy
            </li>
            <li className={styles.catItem}>
              <span className={styles.catItem}>
                <i className="fa-solid fa-caret-right"></i>
              </span>
              Accounting and Auditing
            </li>
            <li className={styles.catItem}>
              <span className={styles.catItem}>
                <i className="fa-solid fa-caret-right"></i>
              </span>
              Agricalture
            </li>
            <li className={styles.catItem}>
              <span className={styles.catItem}>
                <i className="fa-solid fa-caret-right"></i>
              </span>
              Bank Related
            </li>
            <li className={styles.catItem}>
              <span className={styles.catItem}>
                <i className="fa-solid fa-caret-right"></i>
              </span>
              Building Materials
            </li>
            <li className={styles.catItem}>
              <span className={styles.catItem}>
                <i className="fa-solid fa-caret-right"></i>
              </span>
              Cleaning and Janitorial
            </li>
            <li className={styles.catItem}>
              <span className={styles.catItem}>
                <i className="fa-solid fa-caret-right"></i>
              </span>
              Computer and Accesseries
            </li>
            <li className={styles.catItem}>
              <span className={styles.catItem}>
                <i className="fa-solid fa-caret-right"></i>
              </span>
              Construction & It's Machinery
            </li>
            <li className={styles.catItem}>
              <span className={styles.catItem}>
                <i className="fa-solid fa-caret-right"></i>
              </span>
              Consultancy
            </li>
            <li className={styles.catItem}>
              <span className={styles.catItem}>
                <i className="fa-solid fa-caret-right"></i>
              </span>
              Accounting and Auditing
            </li>
            <li className={styles.catItem}>
              <span className={styles.catItem}>
                <i className="fa-solid fa-caret-right"></i>
              </span>
              Agricalture
            </li>
            <li className={styles.catItem}>
              <span className={styles.catItem}>
                <i className="fa-solid fa-caret-right"></i>
              </span>
              Bank Related
            </li>
            <li className={styles.catItem}>
              <span className={styles.catItem}>
                <i className="fa-solid fa-caret-right"></i>
              </span>
              Building Materials
            </li>
            <li className={styles.catItem}>
              <span className={styles.catItem}>
                <i className="fa-solid fa-caret-right"></i>
              </span>
              Cleaning and Janitorial
            </li>
            <li className={styles.catItem}>
              <span className={styles.catItem}>
                <i className="fa-solid fa-caret-right"></i>
              </span>
              Computer and Accesseries
            </li>
            <li className={styles.catItem}>
              <span className={styles.catItem}>
                <i className="fa-solid fa-caret-right"></i>
              </span>
              Construction & It's Machinery
            </li>
            <li className={styles.catItem}>
              <span className={styles.catItem}>
                <i className="fa-solid fa-caret-right"></i>
              </span>
              Consultancy
            </li>
          </ul>

          <div className={styles.share}>
            <h1>Invite & share with your friends</h1>
            <div className={styles.shareInput}>
              <input type="text" />
              <p>(Email addresses separated by comma.)</p>
              <button>Invite</button>
            </div>
            <div className={styles.shareLink}>
              <button>
                <i className="fa-solid fa-thumbs-up"></i>Like
              </button>
              <button>Share</button>
              <button>
                <i className="fa-brands fa-facebook-f"></i>Recommend
              </button>
            </div>
          </div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.searchContainer}>
            <h1>Tender Listing</h1>
            <div className={styles.searchControl}>
              <input type="text" placeholder="Enter search keywords" />
              <select>
                <option>All Items</option>
                <option>All Items</option>
                <option>All Items</option>
                <option>All Items</option>
              </select>
              <select>
                <option>Please select</option>
                <option>All Items</option>
                <option>All Items</option>
                <option>All Items</option>
              </select>
              <select>
                <option>Region</option>
                <option>Engineering, Service & Equipment</option>
                <option>All Items</option>
                <option>All Items</option>
              </select>
              <select>
                <option>Region</option>
                <option>All Items</option>
                <option>All Items</option>
                <option>All Items</option>
              </select>
              <select>
                <option>Language</option>
                <option>Amharic</option>
                <option>English</option>
              </select>
              <button>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
          {/* {loading
            ? ' Loading please wait'
            :  */}
          {data.map((t, i) => (
            <>
              <div className={styles.content} key={i}>
                <span className={styles.sNumber}>{i + 1}</span>
                <div className={styles.list}>
                  <Link href={`/tender/${t._id}`}>
                    <a className={styles.title}>{t.title}</a>
                  </Link>
                  <p className={styles.info}>
                    Category: {t.categories.map((c) => c + ', ')}
                  </p>
                  <p className={styles.hour}>Posted: 1 hr ago</p>
                  <p className={styles.deadline}>Deadline: {t.deadline}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </main>
    </div>
  );
};
export const getServerSideProps = async () => {
  dbConnect();
  const res = await axios.get(`http://localhost:3000/api/tenders`);
  console.log(res.data);
  return {
    props: { data: res.data },
  };
};
export default tender;
