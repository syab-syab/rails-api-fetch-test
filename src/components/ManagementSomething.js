import React from 'react'
import useFetchSuper from '../hooks/useFetchSuper';
import dataMatch from '../functions/dataMatch';
import { useState } from 'react';
import useFetchEdit from '../hooks/useFetchEdit';
import usePost from '../hooks/usePost';
import useFetchDelete from '../hooks/useFetchDelete';
// 管理画面のSomethingのリスト

const ManagementSomething = () => {

  const url = "http://localhost:3000/somethings";

  const urlSub = "http://localhost:3000/colors";

  const { data: somethings, subData, isLoaded, error } = useFetchSuper(url, urlSub)


  // inputに格納する用(edit)
  const [valueName, setValueName] = useState("");

  // inputに格納する用(post)
  const [postValue, setPostValue] = useState("");

  // -------------------------------------------------

  // 編集するデータのid(edit)
  const [editId, setEditId] = useState(null);

  // -------------------------------------------------

  // 関連付けるcolor_id(post)
  const [colorId, setColorId] = useState(null);

  // 関連付けられているcolor_id(edit)
  const [refId, setRefId] = useState(null)

  // -------------------------------------------------

  // input要素を入力するたびに発火(post用)
  const handleChangePost = (e) => {
    setPostValue(e.target.value)
  }

  // selectを変える度に発火(post用)
  const selectChangePost = (e) => {
    setColorId(e.target.value)
  }

  // postメソッド
  // const dataPost = () => {
  //   alert(`value = ${postValue} : color_id = ${colorId}`)
  // }

  const dataPost = usePost;

  // 編集後、stateをリセットする(post)
  // const resetPost = () => {
  //   setPostValue("")
  //   setColorId(null)
  // }


  // -------------------------------------------------

  // editボタン押したら編集用のstateにIDと値を格納する
  const editInputStore = (id, value) => {
    setEditId(id)
    setValueName(value)
  }

  // input要素を入力するたびに発火(edit用)
  const handleChange = (e) => {
    setValueName(e.target.value)
  }

  // selectを変える度に発火(edit用)
  const selectChangeEdit = (e) => {
    setRefId(e.target.value)
  }

  // editメソッド
  const dataEdit = useFetchEdit;

  // 編集後、stateをリセットする(edit)
  const resetState = () => {
    setValueName("");
    setEditId(null)
    setRefId(null)
  }


  // -------------------------------------------------

  // 削除メソッド
  // const dataDelete = (id) => {
  //   alert(`${id}を削除します`)
  // }

  const dataDelete = useFetchDelete;

  // -------------------------------------------------

  return (
    <div>
      <div>
        <h3>Something</h3>
        <div>

            <div className='table-container'>
              <table className='table' align='center'>
                <thead>
                  <tr>
                    <th>name</th><th>color_id</th><th>edit</th><th>delete</th>
                  </tr>
                </thead>
                <tbody>
                { error && <tr><th>{error.message}</th></tr> }
                { isLoaded && <tr><th>loading</th></tr> }
                { somethings &&
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
                      {/* ListとListColorのようにコンポーネントを分けてuseFetchを使ってないから */}
                      {/* クリックするたびにuseFetchSuperが発火する */}
                      {/* いずれ修正する */}
                      <td><button onClick={() => editInputStore(something.id, something.name)}>Edit</button></td>
                      {/* 削除は上手くいった */}
                      <td><button onClick={() => dataDelete(something.id, "somethings")}>Delete</button></td>
                    </tr>
                  ))
                }
                </tbody>
              </table>
            </div>

        </div>
      </div>
      
      {/* --------- Postフォーム --------- */}
      <div>
        <p>Post</p>
        {/* <div id='content'> */}
        <div>
          <form>
            <label>name: </label>
            <input
              type="text"
              value={postValue}
              onChange={handleChangePost} />
            <br />
            <label>color: </label>
            {
              subData &&
              <select
                onChange={selectChangePost}>
              <option>選択してください</option>
              {
                subData.map(sub => (
                  <option key={sub.id} value={sub.id}>{sub.name}</option>
                ))
              }
            </select>
            }
            <br />
            {/* postが上手くいかないので後回し */}
            <button onClick={() => dataPost({"name": postValue, "color_id": parseInt(colorId, 10)}, "somethings")}>登録</button>
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
          <p>Edit id is {editId}</p>
            <form>
            <label>name: </label>
            <input
              type="text"
              value={valueName}
              onChange={handleChange}
            />
            <br />
            <label>color: </label>
            {
              subData &&
              <select
                onChange={selectChangeEdit}>
              <option>選択してください</option>
              {
                subData.map(sub => (
                  <option key={sub.id} value={sub.id}>{sub.name}</option>
                ))
              }
            </select>
            }
            <br />
            {/* editが上手くいかないので後回し */}
            <button onClick={() => dataEdit(editId, {"name": valueName, "color_id": parseInt(refId, 10)}, "somethings", resetState)}>登録</button>
          </form>
        </div>
      </div>
      {/* --------- Editフォーム・End --------- */}
    </div>
  )
}

export default ManagementSomething