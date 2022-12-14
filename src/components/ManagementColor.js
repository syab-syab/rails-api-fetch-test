import React from 'react'

import useFetch from '../hooks/useFetch';

const ManagementColor = () => {

  const url = "http://localhost:3000/colors";

  const { data: colors, isLoaded, error } = useFetch(url)


  return (
    <div>
      <div>
        <h3>Color</h3>
        { error && <div>{error.message}</div> }
        { isLoaded && <div>loading</div> }
        {
          colors &&
          <div className='table-container'>
            <table className='table' align='center'>
              <thead>
                <tr>
                  <th>name</th><th>edit</th><th>delete</th>
                </tr>  
              </thead>
              <tbody>
                {
                  colors.map(color => (
                    <tr key={color.id}>
                      <td>{color.name}</td>
                      <td><button>Edit</button></td>
                      <td><a href="#">Delete</a></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        }
      </div>
      
      {/* --------- Postフォーム --------- */}
      <div>
        <p>Post</p>
        {/* <div id='content'> */}
        <div>
          <form>
            <label>name: </label><input type="text" />
            <br />
            <label>description: </label><textarea></textarea>
            <br />
            <label>caffeine: </label>
            <select>
              <option value="1">多め</option>
              <option value="2">普通</option>
              <option value="3">少なめ</option>
              <option value="4">無し</option>
              <option value="5">不明</option>
            </select>
            <br />
            <label>tea's type: </label>
            <select>
              <option value="1">日本茶</option>
              <option value="2">紅茶</option>
              <option value="3">ハーブティー</option>
              <option value="4">その他</option>
            </select>
            <br />
            <button>登録</button>
          </form>
        </div>
      </div>
      {/* --------- Postフォーム・End --------- */}

      {/* --------- Editフォーム --------- */}
      {/* <div id='overlay' > */}
      <div>
        <p>Edit</p>
        {/* <div id='content'> */}
        <div>
          <form>
            <label>name: </label><input type="text" />
            <br />
            <label>description: </label><textarea></textarea>
            <br />
            <select>
              <option value="1">多め</option>
              <option value="2">普通</option>
              <option value="3">少なめ</option>
              <option value="4">無し</option>
              <option value="5">不明</option>
            </select>
            <br />
            <select>
              <option value="1">日本茶</option>
              <option value="2">紅茶</option>
              <option value="3">ハーブティー</option>
              <option value="4">その他</option>
            </select>
            <br />
            <button>登録</button>
          </form>
        </div>
      </div>
      {/* --------- Editフォーム・End --------- */}
    </div>
  )
}

export default ManagementColor