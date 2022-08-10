import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../components/styles/Welcome.css'

const Welcome = () => {
  const navigate = useNavigate()
  return (
        <div className='menu welcome'>
          <h1>Welcome to REACT CAFE!</h1>
          <p>Click  <a
          rel='noreferrer'
          target="_blank"
          href='https://www.linkedin.com/in/jos%C3%A9-carlos-p%C3%A9rez-trujillo-b88a99230'>
                here
              </a> to see my linkedin profile
            </p>
            <button type="button"
            className="btn btn-outline-dark go"
            onClick={() => navigate('/Menu')}
            >See Menu!</button>
        </div>
  )
}

export default Welcome
