import React from 'react'
import { useState } from 'react'

export default function PostColors() {

  const [teaName, setTeaName] = useState('test');

  
  const [indicateValue, setIndicateValue] = useState('');

  const handleChange = (e) => {
    setTeaName(e.target.value);
  }

  const handleClick = (e) => {
    setIndicateValue(teaName);
    setTeaName('');
  }

  return (
    <div>
      <p>PostColors</p>
      <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={teaName}
              onChange={handleChange}
            />
          </label>
          <br />
          <input
          // typeをsubmitにするとリロードされてしまう
            type="button"
            value="Submit"
            onClick={handleClick}
          />
        </form>
      <p>{indicateValue}</p>
    </div>
  )
}
