import React from 'react'
import Product from './Product'
import './styles/ProductList.css'

const ProductList = ({ data }) => {
  return (
      <div className='products'>
          {data.map((item) => {
            return (
            <Product
              key={item.id}
              name={item.name}
              price={item.price}
            />)
          }
          )}
        </div>
  )
}

export default ProductList
