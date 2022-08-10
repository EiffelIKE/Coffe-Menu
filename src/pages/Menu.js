import React from 'react'
import ProductContainer from '../components/ProductContainer'
import Title from '../components/Title'
import useFetchAPI from '../hooks/useFetchAPI'
import { url } from '../config'
import '../components/styles/Menu.css'

const Menu = () => {
  const { data } = useFetchAPI(url + 'Types')
  return (
        <div className='menu'>
            <Title/>
            {data.map((product, index) => {
              return (
                <ProductContainer
                key={product.id}
                product={product.name}
                img={product.img}
                />
              )
            })}
        </div>
  )
}

export default Menu
