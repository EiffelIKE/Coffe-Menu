import React from 'react'
import CoffeeImg from '../assets/coffee.jpg'
import ProductList from './ProductList'

const ProductContainer = ({ data }) => {
  return (
        <div className='ProdContainer'>
            <div className='header'>
              <h2>Coffee</h2>
              <img src={CoffeeImg} alt="Products" />
            </div>
            <ProductList data={data}/>
            {/* <ProductList data={data}/> */}
        </div>
  )
}

export default ProductContainer
