import styles from '../styles/Home.module.scss'
import Image from 'next/image'

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <div className={styles.upperFooter}>
                <h1>Get in touch</h1>
                <p>47 Chandos Place, London, WC2N 4HS</p>
                <button className={styles.buttonClear} type="button">Contact us</button>
            </div>
            <div className={styles.lowerFooter}>
                <Image src="/VACA-logo.svg" alt="VACA Logo" width={72} height={16} />
                <div className={styles.buttons}>
                    <button type="button"> Privacy policy</button>
                    <button type="button"> Privacy policy</button>
                    <button type="button"> Privacy policy</button>
                </div>
            </div>
        </footer>
    )
    
}