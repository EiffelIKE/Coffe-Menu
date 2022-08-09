import React from 'react'
import Menu from './pages/Menu'

const App = () => {
  const data = [{
    id: 1,
    name: 'French Vanilla',
    price: '2.55',
    available: 'true'
  },
  {
    id: 2,
    name: 'Caramel Macchiato',
    price: '3.75',
    available: 'false'
  },
  {
    id: 3,
    name: 'Pumpkin Spice',
    price: '3.50',
    available: 'true'
  },
  {
    id: 4,
    name: 'Hazelnut',
    price: '4.00',
    available: 'true'
  }]
  return (
    <>
      <Menu data={data}/>
    </>
  )
}

export default App
