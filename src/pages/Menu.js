import React from 'react'
import ProductContainer from '../components/ProductContainer'
import Title from '../components/Title'
import useFetchAPI from '../hooks/useFetchAPI'
import { url } from '../config'
import { useNavigate } from 'react-router-dom'
import '../components/styles/Menu.css'

const Menu = () => {
  const { data } = useFetchAPI(url + 'Types')
  const navigate = useNavigate()
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
             <button type="button"
            className="btn btn-outline-dark go align"
            onClick={() => navigate('/Welcome')}
            >Back</button>
        </div>
  )
}

export default Menu
