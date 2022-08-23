import styles from "../styles/Navbar.module.css"
import Image from "next/Image"
const Navbar = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.menubar}>
                <ul className={styles.menu}>
                    <li className={styles.menuItem}>
                        
                        <i className="fa-solid fa-house"></i>
                    </li>                  

                    <li className={styles.menuItem}>tenders</li>
                    <li className={styles.menuItem}>service</li>
                    <li className={styles.menuItem}>subscribe</li>
                    <li className={styles.menuItem}>free tenders</li>
                    <li className={styles.menuItem}>contact</li>
                </ul>
                <div className={styles.postButton}>Post Tenders</div>
            
            </div>
            <div className={styles.banner}>
                <Image src="/images/ht banner101.jpg" alt="" width="980px" height="152px"/>

            </div>
        
    </div>
    )
}

export default Navbar
