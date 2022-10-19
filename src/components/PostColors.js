import React from 'react'
import { useState } from 'react'
import usePost from '../hooks/usePost';

export default function PostColors() {

  const [colorName, setColorName] = useState('test');

  
  const [indicateValue, setIndicateValue] = useState('');

  const handleChange = (e) => {
    setColorName(e.target.value);
  }

  const handleClick = (e) => {
    setIndicateValue(colorName);
    setColorName('');
  }

  // postのメソッド
  const postColors = usePost;

  return (
    <div>
      <p>PostColors</p>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={colorName}
            onChange={handleChange}
          />
        </label>
        <br />

        <button onClick={handleClick}>Submit</button>
        {/* <button onClick={postColors}>POST!</button> */}
        <button onClick={() => postColors(colorName, "colors")}>POST!</button>
      <p>{indicateValue}</p>
    </div>
  )
}
