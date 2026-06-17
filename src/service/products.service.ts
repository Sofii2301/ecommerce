import type { Product } from "../interface"

export const getProducts = async ():Promise<Product[]> => {
    try {
      const response = await fetch('http://localhost:3000/results')
      if (response) {
        const data = await response.json()
        return data
      } else {
        throw new Error('Failed to fetch products');
      }
    } catch (error) {
      throw new Error('Network error');
    }
  }