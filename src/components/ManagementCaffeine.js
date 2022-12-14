import React from 'react'
import useFetch from '../hooks/useFetch';
// 管理画面のCaffeineのリスト

const ManagementCaffeine = () => {

  const url = "http://localhost:3000/caffeines";

  const { data: caffeines, isLoaded, error } = useFetch(url)


  return (
    <div>
      <div>
        <h3>Caffeine</h3>
        <div>
          { error && <div>{error.message}</div> }
          { isLoaded && <div>loading</div> }
          {
            caffeines &&
            <div className='table-container'>
              <table className='table' align='center'>
                <tr>
                  <th>amount</th><th>edit</th><th>delete</th>
                </tr>
                {
                  caffeines['caffeines'].map(caffeine => (
                    <tr key={caffeine.id}>
                      <td>{caffeine.amount}</td>
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
            <label>amount: </label>
            <select>
              <option value="1">多め</option>
              <option value="2">普通</option>
              <option value="3">少なめ</option>
              <option value="4">無し</option>
              <option value="5">不明</option>
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
            <label>amount: </label><textarea></textarea>
            <br />
            <select>
              <option value="1">多め</option>
              <option value="2">普通</option>
              <option value="3">少なめ</option>
              <option value="4">無し</option>
              <option value="5">不明</option>
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

export default ManagementCaffeine