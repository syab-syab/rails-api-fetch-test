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
            <ul>
              {types['types'].map(type => (
                <li key={type.id}>{type.name} | <button>Edit</button> | <a href="#">Delete</a></li>
              ))}
            </ul>
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