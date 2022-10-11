import React from 'react'
import { useState } from 'react'

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

  const postColors = () => {
    const params = {
      method: "POST",
      body: JSON.stringify({"name": colorName}),
      headers:{'Content-Type': 'application/json'}
    }
    const url = "http://localhost:3000/colors";
    fetch(url, params);
  }

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
          <button onClick={postColors}>POST!</button>
      <p>{indicateValue}</p>
    </div>
  )
}
