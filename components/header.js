import styles from '../styles/Home.module.scss'
import Image from 'next/image'

export default function Header() {
    return(
    <div>
        <div className={styles.upperHeader}>
            <Image src="/VACA-logo.svg" alt="VACA Logo" width={101} height={22} />
        </div>
        <div className={styles.lowerHeader}>
            <h1 className={styles.title}>
                Reinventing the world of beauty
            </h1>

            <p className={styles.description}>
                We believe that through creativity, we are
                able to develop timeless products, both
                meaningful and inspirational, to people
                and their lives.
            </p>
        </div>
    </div>
    )
}