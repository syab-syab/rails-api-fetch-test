import React from 'react';
import { useState } from 'react';
import usePost from '../hooks/usePost';
import useFetch from '../hooks/useFetch';

export default function PostSomethings() {
  const url = "http://localhost:3000/colors";

  const { data: colors, isLoaded, error } = useFetch(url)

  // somethingのname
  const [value, setValue] = useState('test');

  // somethingのcolor_id
  const [colorId, setColorId] = useState(null)
  
  // 確認用
  const [indicateValue, setIndicateValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleClick = () => {
    alert(`value is ${value} : color_id is ${colorId}`)
    setIndicateValue(value);
    setValue('');
  }

  const handleSelect = (e) => {
    setColorId(e.target.value)
  }

    // postのメソッド
    const postSomethings = usePost;



  return (
    <div>
      <p>PostSomethings</p>
      <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={value}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
          color:
          <select
            onChange={handleSelect}
            >
            {error && <option>error</option>}
            {isLoaded && <option>Loading...</option>}
            {colors && 
              colors.map(color => (
                <option key={color.id} value={color.id}>{color.name}</option>
              ))
            }
              {/* <option value="4">red</option>
              <option value="5">green</option>
              <option value="6">yellow</option> */}
            </select>
          </label>
          <br />
          <button onClick={() => handleClick()}>Submit</button>
          {/* 多分jsonデータが2つ以上だと上手くpostやputが出来ないっぽい */}
          <button onClick={() => postSomethings({"name": value, "color_id": colorId}, "somethings")}>POST</button>
        </form>
        <p>{indicateValue}</p>
        <p>{colorId}</p>
    </div>
  )
}
