import { useEffect, useState } from "react"
import { Hero } from "../../components/ui/Hero"
import styles from "./Home.module.css"
import { CardProduct } from "../../components/ui/CardProduct"

const Home = () => {
  const [products, setProducts] = useState([])
  
  const getProducts = async () => {
    try {
      const response = await fetch('http://localhost:3000/results')
      if (response) {
        const data = await response.json()
        setProducts(data)
      } else {
        throw new Error('Failed to fetch products');
      }
    } catch (error) {
      throw new Error('Network error');
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  console.log(products)

  return (
    <>
      <Hero />
      <div className={styles.container}>
        {products.map((product) => (
          <CardProduct key={product.id} product={product}/>
        ))}
      </div>
    </>
  )
}

export default Home