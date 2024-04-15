import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Productshelper from '../Products/Productshelper'
import {Helmet} from "react-helmet";

export default function ProductSearch() {
  const [products, setProducts] = useState([])
  const [query, setQuery] = useState("")

  async function getAllProducts() {
    try {
      const response = await axios.get('https://ecommerce.routemisr.com/api/v1/products')
      setProducts(response.data.data)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase()
    setQuery(searchTerm)
  }

  const filteredProducts = products.filter(product => {
    if (query === '') {
      return true; // Return all products if query is empty
    } else {
      return product.title.toLowerCase().includes(query.toLowerCase())
    }
  })

  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Fresh cart || My orders</title>
                
            </Helmet>
      <input
        className='mt-4 '
        type="text"
        placeholder="Search here"
        onChange={handleSearch}
        value={query}
      />
      <div className="row">
        {query==''? products.map((product, index) => (
          <div className="col-md-3" key={index}>
            <Productshelper product={product} />
          </div>)) : 
        filteredProducts.map((product, index) => (
          <div className="col-md-3" key={index}>
            <Productshelper product={product} />
          </div>
        ))}
      </div>
    </>
  )
}
