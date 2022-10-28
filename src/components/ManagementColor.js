import React from 'react'

import useFetch from '../hooks/useFetch';

const ManagementColor = () => {

  const url = "http://localhost:3000/colors";

  const { data: colors, isLoaded, error } = useFetch(url)


  return (
    <div>
      <h3>Color</h3>
      <h4><button>Post</button></h4>
      <div>
      { error && <div>{error.message}</div> }
      { isLoaded && <div>loading</div> }
      {
        colors &&
        <ul>
          {colors['colors'].map(color => (
            <li key={color.id}>{color.name} | <button>Edit</button> | <a href="#">Delete</a></li>
          ))}
        </ul>
      }
      </div>
    </div>
  )
}

export default ManagementColor