import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../components/styles/Welcome.css'

const NotFound = () => {
  const navigate = useNavigate()
  return (
        <div className='menu welcome'>
        <h1>Page Not Found!</h1>
          <p>Error: 404!</p>
            <button type="button"
            className="btn btn-outline-dark go"
            onClick={() => navigate('/Welcome')}
            >Go Home</button>
        </div>
  )
}

export default NotFound
