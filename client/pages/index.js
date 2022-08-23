import Head from 'next/head';
import Image from 'next/image';
import Data from "../public/data.js"

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>Ethio tender portal</title>
        <meta name="description" content="Best tender portal in Ethiopia" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>

      <main className={styles.main}>
      
        <div className={styles.category}>
            <h1>Tender Category</h1>
            <ul className={styles.cat}>
                <li className={styles.catItem}><span className={styles.catItem}><i className="fa-solid fa-caret-right"></i></span>Accounting and Auditing</li>
                <li className={styles.catItem}><span className={styles.catItem}><i className="fa-solid fa-caret-right"></i></span>Accounting and Auditing</li>
                <li className={styles.catItem}><span className={styles.catItem}><i className="fa-solid fa-caret-right"></i></span>Accounting and Auditing</li>
                <li className={styles.catItem}><span className={styles.catItem}><i className="fa-solid fa-caret-right"></i></span>Agricalture</li>
                <li className={styles.catItem}><span className={styles.catItem}><i className="fa-solid fa-caret-right"></i></span>Bank Related</li>
                <li className={styles.catItem}><span className={styles.catItem}><i className="fa-solid fa-caret-right"></i></span>Building Materials</li>
                <li className={styles.catItem}><span className={styles.catItem}><i className="fa-solid fa-caret-right"></i></span>Cleaning and Janitorial</li>
                <li className={styles.catItem}><span className={styles.catItem}><i className="fa-solid fa-caret-right"></i></span>Computer and Accesseries</li>
                <li className={styles.catItem}><span className={styles.catItem}><i className="fa-solid fa-caret-right"></i></span>Construction & It's Machinery</li>
                <li className={styles.catItem}><span className={styles.catItem}><i className="fa-solid fa-caret-right"></i></span>Consultancy</li>
                <li className={styles.catItem}><span className={styles.catItem}><i className="fa-solid fa-caret-right"></i></span>Accounting and Auditing</li>
                <li className={styles.catItem}><span className={styles.catItem}><i className="fa-solid fa-caret-right"></i></span>Agricalture</li>
                <li className={styles.catItem}><span className={styles.catItem}><i className="fa-solid fa-caret-right"></i></span>Bank Related</li>
                <li className={styles.catItem}><span className={styles.catItem}><i className="fa-solid fa-caret-right"></i></span>Building Materials</li>
                <li className={styles.catItem}><span className={styles.catItem}><i className="fa-solid fa-caret-right"></i></span>Cleaning and Janitorial</li>
                <li className={styles.catItem}><span className={styles.catItem}><i className="fa-solid fa-caret-right"></i></span>Computer and Accesseries</li>
                <li className={styles.catItem}><span className={styles.catItem}><i className="fa-solid fa-caret-right"></i></span>Construction & It's Machinery</li>
                <li className={styles.catItem}><span className={styles.catItem}><i className="fa-solid fa-caret-right"></i></span>Consultancy</li>
                <li className={styles.catItem}><span className={styles.catItem}><i className="fa-solid fa-caret-right"></i></span>Accounting and Auditing</li>
                <li className={styles.catItem}><span className={styles.catItem}><i className="fa-solid fa-caret-right"></i></span>Agricalture</li>
                <li className={styles.catItem}><span className={styles.catItem}><i className="fa-solid fa-caret-right"></i></span>Bank Related</li>
                <li className={styles.catItem}><span className={styles.catItem}><i className="fa-solid fa-caret-right"></i></span>Building Materials</li>
                <li className={styles.catItem}><span className={styles.catItem}><i className="fa-solid fa-caret-right"></i></span>Cleaning and Janitorial</li>
                <li className={styles.catItem}><span className={styles.catItem}><i className="fa-solid fa-caret-right"></i></span>Computer and Accesseries</li>
                <li className={styles.catItem}><span className={styles.catItem}><i className="fa-solid fa-caret-right"></i></span>Construction & It's Machinery</li>
                <li className={styles.catItem}><span className={styles.catItem}><i className="fa-solid fa-caret-right"></i></span>Consultancy</li>
            </ul>

            <div className={styles.share}>
                <h1>Invite & share with your friends</h1>
                <div className={styles.shareInput}>

                    <input type="text" />
                    <p>(Email addresses separated by comma.)</p>
                    <button>Invite</button>
                </div>
                <div className={styles.shareLink}>
                    <button><i className="fa-solid fa-thumbs-up"></i>Like</button>
                    <button>Share</button>
                    <button><i className="fa-brands fa-facebook-f"></i>Recommend</button>
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
                        <button><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
            </div>
            {Data.map((t,i)=>(

                <div className={styles.content} key={i}>
                <span className={styles.sNumber}>{i+1}</span>
                <div className={styles.list}>
                    
                    <a href="" className={styles.title}> {t.title}</a>
                    <p className={styles.info}>               
                        
                        Category: {t.category}
                    </p>
                    <p className={styles.hour}>Posted: 1 hr ago</p>
                    <p className={styles.deadline}>Deadline: {t.deadline}</p>
                </div>            
            </div>
            ))}
           
        </div>
        
    
      </main>

      
    </div>
  );
}
