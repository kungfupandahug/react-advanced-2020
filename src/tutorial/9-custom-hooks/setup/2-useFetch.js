// import { useState, useEffect } from 'react';
import { useState, useEffect, useCallback } from 'react';

// not allowed to use hooks inside the regular function.
// the function has to be a component or a custom hook.
// has to begin with 'use...'
// export const useFetch = (url) => {
//   const [loading, setLoading] = useState(true)
//   const [products, setProducts] = useState([])

//   const getProducts = async () => {
//     const response = await fetch(url)
//     const products = await response.json()
//     setProducts(products)
//     setLoading(false)
//   }

//   useEffect(() => {
//     getProducts()
//   }, [url])

//   return { loading, products };
// };

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  const getProducts = useCallback(async () => {
    const response = await fetch(url)
    const products = await response.json()
    setProducts(products)
    setLoading(false)
  }, [url]);

  useEffect(() => {
    getProducts()
  }, [url, getProducts])

  return { loading, products };
};