import React from 'react'
import useFetch from '../hooks/useFetch';
// 管理画面のTeaのTypeのリスト

const ManagementType = () => {

  const url = "http://localhost:3000/types";

  const { data: types, isLoaded, error } = useFetch(url)

  return (
    <div>
      <div>
        <h3>Type</h3>
        <div>
          { error && <div>{error.message}</div> }
          { isLoaded && <div>loading</div> }
          {
            types &&
            <div className='table-container'>
              <table className='table' align='center'>
                <tr>
                  <th>name</th><th>edit</th><th>delete</th>
                </tr>
                {
                  types['types'].map(type => (
                    <tr key={type.id}>
                      <td>{type.name}</td>
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
            <button>登録</button>
          </form>
        </div>
      </div>
      {/* --------- Editフォーム・End --------- */}
    </div>
  )
}

export default ManagementType