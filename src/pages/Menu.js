import React from 'react'
import ProductContainer from '../components/ProductContainer'
import Title from '../components/Title'
import useFetchAPI from '../hooks/useFetchAPI'
import { url } from '../config'
import '../components/styles/Menu.css'

const Menu = () => {
  const { coffee } = useFetchAPI(url)
  console.log(coffee)
  return (
        <div className='menu'>
            <Title/>
            <ProductContainer data={coffee}/>
        </div>
  )
}

export default Menu
