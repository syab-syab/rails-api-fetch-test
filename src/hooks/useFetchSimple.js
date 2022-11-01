// somethingなど他のmodelと関連付けてあるやつ用

import React from 'react'
import { useState } from 'react'

const useFetchSimple = (url) => {
  const [data, setData] = useState(null)

  setTimeout(() => {
    fetch(url)
      .then(data => {
        console.log(data)
        setData(data)
      })
  }, 500);

  return data
}

export default useFetchSimple;