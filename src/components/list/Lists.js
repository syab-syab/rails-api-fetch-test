import { useState } from 'react'

const Lists = ({values, model}) => {

  // inputに格納する用
  const [valueName, setValueName] = useState("test");

  // 編集するデータのid
  const [editId, setEditId] = useState();

  // 編集した値を格納する用
  // const [changedValue, setChangedValue] = useState();


  // editボタン押したら編集用のstateにIDと値を格納する
  const editInputStore = ( id, value) => {
    setEditId(id)
    setValueName(value)
  }

  // deleteボタン押したら削除
  const deleteValue = (id) => {
    const url = `http://localhost:3000/${model}/${id}`;
    const result =  window.confirm("削除してもOK？")

    if (result) {
      console.log(`URL is ${url}`);
      const params = {
        method: "DELETE"
      }
      fetch(url, params)
        .then(data => console.log(data))
        .catch(err => console.log(err));
    } else {
      console.log("削除中止");
    }
  }

  // input要素を入力するたびに発火
  const handleChange = (e) => {
    // setChangedValue(e.target.value)
    setValueName(e.target.value)
  }

  // 
  const editValue = (id, value) => {
    const url = `http://localhost:3000/${model}/${id}`
    const result =  window.confirm("編集してもOK？");
    
    if (result) {
      const params = {
        method: "PUT",
        body: JSON.stringify({"name": value}),
        headers:{'Content-Type': 'application/json'}
      }
      fetch(url, params);      
    } else {
      console.log("編集中止")
    }

  }


  return (
    <>
      <nav>
        {values.map(value => (
          // 各ページの詳細が表示されないので修正する
          <div key={value.id}>
              {value.name}
              <button onClick={() => editInputStore(value.id, value.name)}>edit</button>
              <button onClick={() => deleteValue(value.id)}>delete</button>
          </div>
        ))}
      </nav>
      <p>Edit Area</p>
      <p>edit id is {editId}</p>
      <p>edit value is {valueName}</p>
      <label>name: </label>
      <input
        type="text"
        value={valueName}
        onChange={handleChange}
      />
      <button onClick={() => editValue(editId, valueName)}>編集する</button>
    </>
  );
}

export default Lists;