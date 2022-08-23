import styles from "../styles/Footer.module.css";
const Footer = () => {
    return (
        <div className={styles.footer}>
        <div className={styles.fLinks}>
            
                <ul className={styles.navLink}>
                    <li className={styles.navItems}>Home |</li>
                    <li className={styles.navItems}>Tenders |</li>
                    <li className={styles.navItems}>Services |</li>
                    <li className={styles.navItems}>Subscription |</li>
                    <li className={styles.navItems}>Basic Subscription |</li>
                    <li className={styles.navItems}>Premium Subscription |</li>
                    <li className={styles.navItems}>Advanced Subscription |</li>
                    <li className={styles.navItems}>SMS Price List </li>
                    <li className={styles.navItems}>Post Your Tenders |</li>
                    <li className={styles.navItems}>Closed Tenders |</li>
                    <li className={styles.navItems}>Mobile Version |</li>
                    <li className={styles.navItems}>Terms & Conditins |</li>
                    <li className={styles.navItems}>Privacy Policy |</li>
                    <li className={styles.navItems}>fAQ |</li>
                    <li className={styles.navItems}>Contact</li>
                </ul>
            
            <div className={styles.fCopyright}>
                <p>Copyright © 2011 - 2022 Habesha Tender. All Rights Reserved.</p>
                 <p>

                     Telephone: +251-967-829782 / +251-960-160215/ +251-118-961881, P.O.Box: 122841
                 </p>
                 <p>
                       Office adress: Aberus Complex 4th floor, office No 405, Bole Road infront of Dembel City Center
                 </p> 
                  <p>
                        Email: contact@habeshatender.com || Website: www.habeshatender.com
                   </p>
            </div>
            <div className={styles.fImg}>
                <img  src="images/navsprite-icons.png" alt="" />
            </div>
        </div>
        
        <div className={styles.fAds}>
            <div className={styles.ad}>
                <h1>
                    Ethiopian Business Catalog
                </h1>
                <ul>
                    <li>Business Catalog</li>
                    <li> ad your company listing</li>
                    <li>Free Advertisment</li>
                </ul>
            </div>
            <div className={styles.ad}>
                <h1>
                    Habesha Jobs
                </h1>
                <ul>
                    <li>Online employment</li>
                    <li>Post Vacancy for Free</li>
                    <li>Upload your Resume for Free</li>
                </ul>
            </div>
            <div className={styles.ad}>
               <h1>
                   Neview IT Solution Plc
                </h1>                   
               <ul>
                <li>Website Design & Hosting</li>
                   <li>Custom Software Development</li>
                   <li>Computer Networking</li>
               </ul>
            </div>
        </div>
    </div>
    )
}

export default Footer
