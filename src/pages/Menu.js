import React from 'react'
import ProductContainer from '../components/ProductContainer'
import Title from '../components/Title'
import '../components/styles/Menu.css'

const Menu = ({ data }) => {
  return (
        <div className='menu'>
            <Title/>
            <ProductContainer data={data}/>
        </div>
  )
}

export default Menu
