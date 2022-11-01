import React from 'react'
import useFetch from '../hooks/useFetch';
// 管理画面のSomethingのリスト

const ManagementSomething = () => {

  const url = "http://localhost:3000/somethings";

  const { data: somethings, isLoaded, error } = useFetch(url)

  return (
    <div>
      <div>
        <h3>Something</h3>
        <div>
          { error && <div>{error.message}</div> }
          { isLoaded && <div>loading</div> }
          {
            somethings &&
            <div className='table-container'>
              <table className='table' align='center'>
                <tr>
                  <th>name</th><th>color_id</th><th>edit</th><th>delete</th>
                </tr>
                {
                  somethings['somethings'].map(something => (
                    <tr key={something.id}>
                      <td>{something.name}</td>
                      <td>{something.color_id}</td>
                      <td><button>Edit</button></td>
                      <td><a href="#">Delete</a></td>
                    </tr>
                  ))
                }
              </table>
            </div>
          }
        </div>
      </div>
      
      {/* --------- Postフォーム --------- */}
      <div>
        <p>Post</p>
        {/* <div id='content'> */}
        <div>
          <form>
            <label>name: </label><input type="text" />
            <br />
            <label>color: </label>
            <select>
              <option value="1">test</option>
              <option value="2">test</option>
              <option value="3">test</option>
              <option value="4">test</option>
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
            <label>color: </label>
            <select>
              <option value="1">test</option>
              <option value="2">test</option>
              <option value="3">test</option>
              <option value="4">test</option>
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

export default ManagementSomething