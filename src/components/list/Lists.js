import { useState } from 'react'

import useFetchEdit from '../../hooks/useFetchEdit';

import useFetchDelete from '../../hooks/useFetchDelete';

const Lists = ({values, model}) => {

  // inputに格納する用
  const [valueName, setValueName] = useState("test");

  // 編集するデータのid
  const [editId, setEditId] = useState();


  // editボタン押したら編集用のstateにIDと値を格納する
  const editInputStore = ( id, value) => {
    setEditId(id)
    setValueName(value)
  }

  // input要素を入力するたびに発火
  const handleChange = (e) => {
    setValueName(e.target.value)
  }

  // 編集
  const dataEdit = useFetchEdit;

  // 削除
  const dataDelete = useFetchDelete;


  // 編集後、stateをリセットする
  const resetState = () => {
    setValueName("");
    setEditId("")
  }

  return (
    <>
      <nav>
        {values.map(value => (
          // 各ページの詳細が表示されないので修正する
          <div key={value.id}>
              {value.name}
              <button onClick={() => editInputStore(value.id, value.name, model)}>edit</button>
              <button onClick={() => dataDelete(value.id, model)}>delete</button>
          </div>
        ))}
      </nav>
      <p>Edit Area</p>
      <p>edit id is {editId}</p>
      <p>edit value is {valueName}</p>
      <p>{}</p>
      <label>name: </label>
      <input
        type="text"
        value={valueName}
        onChange={handleChange}
      />
      <button onClick={() => dataEdit(editId, { "name": valueName }, model, resetState)}>SUBMIT</button>
      <br />
    </>
  );
}

export default Lists;