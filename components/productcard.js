import styles from '../styles/Home.module.scss'
import Image from 'next/image'
// Image tag chosen as it better when it comes to SEO

export default function ProductCard({ product }) {
    const path = '/../public/' + product.images[0].path
    const price = product.price[0].currency + product.price[0].amount.toFixed(2)

    //generates darker image if secondary description exists
    function ImagePicker() {
        if (product.description.second){
            return(<Image src={path} width={300} height={300} className={styles.imageDark} />)
        }
        else{
            return(<Image src={path} width={300} height={300} className={styles.image} />
            )
        }
    }

    return (
        <a className={styles.card}>
            <p className={styles.imageText}>{product.description.second}</p>
            <ImagePicker/>
            <h2>{product.productName}</h2>
            <p>{product.description.main}</p>
            <p>{price}</p>
        </a>
    )
}