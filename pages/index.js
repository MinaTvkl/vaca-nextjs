import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import ProductCard from '../components/productcard'
import React, { useState, useMemo } from 'react';
import Header from '../components/header'
import Footer from '../components/footer'

// Fetching data from the JSON file 
import fsPromises from 'fs/promises';
import path from 'path'
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), './products.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);
  return {
    props: objectData
  }
}


// Generating grid with products from JSON data
const ProductGrid = ({ productList, visible }) => {
  console.log("running grid", productList)
  return (
    <div className={styles.grid}>
      {productList.slice(0, visible).map((product) => (<ProductCard product={product} key={product.productID} />))}
    </div>
  )
}

export default function Home(props) {

  const [list, setData] = useState(props.productList);
  //state management
  const [visible, setVisible] = useState(4);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  //sort by lowest price (ascending)
  function sortByPrice() {
      const sorted = list.slice().sort((b, a) => {
        return b.price[0].amount - a.price[0].amount
      });
      setData(sorted)
  }

  //sort products by newest first (descending)
  function sortByDate() {
      const sorted = list.slice().sort((a, b) => {
        return new Date(b.dateAdded) - new Date(a.dateAdded)
      });
      setData(sorted)
  }
  
  return (
      <div className={styles.container}>
        <Head>
          <title>VACA App</title>
          <meta name="description" content="An example for Kreationsbyran"/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"/>
        </Head>
        <Header/>
        <main className={styles.main}>
          <h1>View products</h1>
          <div className={styles.buttons}>
            <button
              onClick={() => sortByPrice()}
              type="button"
            >
              Price
            </button>
            <button
              onClick={() => sortByDate()
              }
              type="button"
            >
              Date
            </button>
            </div>
          <ProductGrid productList={list} visible={visible}/>
          <div className="load-more">
            <button
              onClick={showMoreItems}
              type="button"
            >
              Load more
            </button>
          </div>
        </main>
        <Footer/>
      </div>
  )
}
