import React from 'react'
import useFetch from '../hooks/useFetch';
// 管理画面のTeaのリスト

const ManagementTea = () => {

  const url = "http://localhost:3000/teas";

  const { data: teas, isLoaded, error } = useFetch(url)
  return (
    <div>
      <div>
        <h3>Tea</h3>
        <div>
          { error && <div>{error.message}</div> }
          { isLoaded && <div>loading</div> }
          {/* caffeine_idもcaffeine */}
          {
            teas &&
            <ul>
              {teas['teas'].map(tea => (
                <li key={tea.id}>{tea.name} | カフェイン: {tea.caffeine_id} | 茶種: {tea.type_id} | {tea.description} | <button>Edit</button> | <a href="#">Delete</a></li>
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
            <label>description: </label><textarea></textarea>
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

export default ManagementTea