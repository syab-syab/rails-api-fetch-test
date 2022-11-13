import { useState, useEffect } from 'react';
// 一度に二つのurlからデータを取りたい

const useFetchSuper = (url, refUrl) => {
  const [data, setItems] = useState(null);
  const [subData, setSubData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);


  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then(res => {
          if (!res.ok) {
            throw Error('could not fetch the data for that resource');
          }
          return res.json();
        })
        .then(data => {
          console.log(data)
          setIsLoaded(false);
          setItems(data);
          setError(null)
          // もう一度fetchを使う
          return fetch(refUrl);
        })
        .then(res => {
          return res.json();
        })
        .then(data => {
          console.log("↓ ↓ subData ↓ ↓")
          console.log(data)
          setSubData(data)
        })
        .catch(err => {
          if (err.name === 'AbortError') {
            console.log('fetch aborted')
          } else {
            setIsLoaded(false);
            setError(err.message);
          }
        })
      }, 1000);

    return () => abortCont.abort();
    
  }, [url, refUrl])
  console.log("useFetchSuper")
  return { data, subData, isLoaded, error };
}

export default useFetchSuper