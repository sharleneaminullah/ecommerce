import React, { createContext, useState, useEffect } from 'react';
import { API } from '../helpers';

/* Context API is used to provide a way 
 * of passing data through the component tree 
 * via a Provider-Consumer pair without having 
 * to pass props down through every level.
*/

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await fetch(API)
      const data = await result.json()
      setProducts(data)
    })()
  }, [])

console.log(products);


  return (
    <ProductsContext.Provider value={{ products }}>
      {
        children
      }
    </ProductsContext.Provider>
  );
}

export default ProductsContextProvider;