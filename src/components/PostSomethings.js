import React from 'react';
import { useState } from 'react';

export default function PostSomethings() {
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
      <p>PostSomethings</p>
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
          <label>
          color:
          <select>
              <option value="4">red</option>
              <option value="5">green</option>
              <option value="6">yellow</option>
            </select>
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
