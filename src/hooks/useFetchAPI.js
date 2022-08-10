import axios from 'axios'
import { useState, useEffect } from 'react'

const useFetchAPI = (url) => {
  const [coffee, setCofee] = useState([])
  // const [dessert, setDessert] = useState([])
  useEffect(() => {
    axios.get(url).then(
      (response) => {
        setCofee(response.data.Coffee)
      }
    ).catch((error) => alert(error))
  }, [url])
  return { coffee }
}

export default useFetchAPI
