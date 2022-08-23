import styles from '../styles/Topbar.module.css';
import Image from "next/image";
const Topbar = () => {
    return (
        <div className= {styles.topbar} >
            <div className= {styles.topLeft}>
                <Image src="/images/logo.jpg" alt="" width="450px" height="109x"/>
            </div>
        <div className= {styles.topRight}>
            <div className={styles.subscribe}>Subscribe</div>
            <div className={styles.login}>Login</div>
            <div className={styles.help}>
                Help<span className={styles.hIcon}> <i class="fa-solid fa-caret-down"></i></span>
            
            </div>

        </div>
    </div>
    )
}

export default Topbar
