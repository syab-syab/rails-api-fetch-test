import React from 'react'
import useFetchSuper from '../hooks/useFetchSuper';
import dataMatch from '../functions/dataMatch';
import { useState } from 'react';
// 管理画面のSomethingのリスト

const ManagementSomething = () => {

  const url = "http://localhost:3000/somethings";

  const urlSub = "http://localhost:3000/colors";

  const { data: somethings, subData, isLoaded, error } = useFetchSuper(url, urlSub)

  // inputに格納する用
  const [valueName, setValueName] = useState("test");

  // 編集するデータのid
  const [editId, setEditId] = useState();

    // editボタン押したら編集用のstateにIDと値を格納する
    const editInputStore = ( id, value) => {
      console.log(`前: ${valueName} | ${editId}`)
      setEditId(id)
      setValueName(value)
      console.log(`後: ${valueName} | ${editId}`)
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
                        {
                          // 条件式を書かないとエラー
                          subData &&
                          dataMatch(subData, something.color_id)['name']
                        }
                      </td>
                      {/* editをクリックしたときの挙動が変 */}
                      <td><button onClick={() => editInputStore(something.id, something.name)}>Edit</button></td>
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
            {/* useFetchEditを使う */}
            <button>登録</button>
          </form>
        </div>
      </div>
      {/* --------- Editフォーム・End --------- */}
    </div>
  )
}

export default ManagementSomething