// somethingなど他のmodelと関連付けてあるやつ用
import { useState, useEffect } from 'react';

const useFetchSimple = (url) => {
  const [data, setData] = useState(null)

  useEffect(() => {
      fetch(url, {method: 'GET'})
      .then(res => res.json())
      .then(data => {
          setData(data)
      })
  },[])

  return data
}

export default useFetchSimple;