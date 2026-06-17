import { useEffect, useState } from "react"
import { Hero } from "../../components/ui/Hero"

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
      
    </>
  )
}

export default Home