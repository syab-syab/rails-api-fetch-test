import React from 'react'
// import useFetch from '../hooks/useFetch';
// import useFetchSimple from '../hooks/useFetchSimple';
import useFetchSuper from '../hooks/useFetchSuper';
// import {useState} from 'react'
// 管理画面のSomethingのリスト

const ManagementSomething = () => {

  const url = "http://localhost:3000/somethings";

  const urlSub = "http://localhost:3000/colors";

  const { data: somethings, subData, isLoaded, error } = useFetchSuper(url, urlSub)


  // もうちょい良い名前に変える
  // どのコンポーネントでも使えるように切り出す
  const dataArrange = (data, id) => {
    // メインのデータに関連付けられているIDからモデルの名前を付ける
    const color = data.find(element => element.id === id)
    return color
  }


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
                <thead>
                  <tr>
                    <th>name</th><th>color_id</th><th>edit</th><th>delete</th>
                  </tr>
                </thead>
                <tbody>
                {
                  somethings['somethings'].map(something => (
                    <tr key={something.id}>
                      <td>{something.name}</td>
                      <td>
                        {/* 対応するcolorを表示 */}
                        {something.color_id}|
                        {
                          // 条件式を書かないとエラー
                          subData &&
                          dataArrange(subData, something.color_id)['name']
                        }
                      </td>
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
            {
              subData &&
              <select>
              {
                subData.map(sub => (
                  <option key={sub.id} value={sub.id}>{sub.name}</option>
                ))
              }
            </select>
            }
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