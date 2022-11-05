import React from 'react'
// import useFetch from '../hooks/useFetch';
import useFetchSuper from '../hooks/useFetchSuper';
import dataMatch from '../functions/dataMatch';
// 管理画面のTeaのリスト

const ManagementTea = () => {

  const url = "http://localhost:3000/teas";

  const urlSub = "http://localhost:3000/caffeines";

  const types = [
      {
        "id": 1,
        "name": "日本茶",
        "created_at": "2022-10-07T12:49:15.897Z",
        "updated_at": "2022-10-07T12:49:15.897Z"
      },
      {
        "id": 2,
        "name": "紅茶",
        "created_at": "2022-10-07T12:49:31.213Z",
        "updated_at": "2022-10-07T12:49:31.213Z"
      },
      {
        "id": 3,
        "name": "ハーブティー",
        "created_at": "2022-10-07T12:49:48.595Z",
        "updated_at": "2022-10-07T12:49:48.595Z"
      },
      {
        "id": 4,
        "name": "その他",
        "created_at": "2022-10-07T12:50:01.314Z",
        "updated_at": "2022-10-07T12:50:01.314Z"
      } 
    ]

  // const { data: teas, isLoaded, error } = useFetch(url)
  const { data: teas, subData, isLoaded, error } = useFetchSuper(url, urlSub)

  // useFetchSuper使おうとしたけど取らなきゃいけないデータが3つもあるから困った
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
            <div className='table-container'>
              <table className='table' align='center'>
                <thead>
                  <tr>
                    <th>name</th><th>caffeine</th><th>type</th><th>description</th><th>edit</th><th>delete</th>
                  </tr>
                </thead>
                <tbody>
                {
                  teas['teas'].map(tea => (
                    <tr key={tea.id}>
                      <td>{tea.name}</td>
                      <td>
                        {/* {tea.caffeine_id} */}
                        {
                          subData &&
                          dataMatch(subData, tea.caffeine_id)['amount']
                        }
                      </td>
                      <td>
                        {/* {tea.type_id} */}
                        {dataMatch(types, tea.type_id)['name']}
                      </td>
                      <td>{tea.description}</td>
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
        {
          subData&&
          subData.map(sub => (
            <p key={sub.id}>{sub.id} | {sub.amount}</p>
          ))
        }
        <br />
        {
          types.map(type => (
            <p key={type.id}>{types.id} | {type.name}</p>
          ))
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