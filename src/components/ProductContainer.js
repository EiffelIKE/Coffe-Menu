import React from 'react'
// import CoffeeImg from '../assets/coffee.jpg'
import ProductList from './ProductList'
import { url } from '../config'
import useFetchAPI from '../hooks/useFetchAPI'
import './styles/ProductContainer.css'

const ProductContainer = ({ product, img }) => {
  const { data } = useFetchAPI(url + `${product}`)
  return (
        <div className='prodContainer'>
            <div className='header'>
              <h2>{product}</h2>
              <img src={img} alt="Products" />
            </div>
            <ProductList data={data}/>
            {/* <ProductList data={data}/> */}
        </div>
  )
}

export default ProductContainer
