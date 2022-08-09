import React from 'react'

function Product ({ name, price }) {
  return (
    <>
      <p>{name}</p>
      <p className='end'>{price}</p>
    </>
  )
}

export default Product
