import React, { useEffect } from 'react'

const Lists = ({values, model}) => {

  // 編集画面へ遷移
  // const moveUpdate = () => {

  // }

  const deleteValue = (id) => {
    const url = `http://localhost:3000/${model}/${id}`;
    const result =  window.confirm("削除してもOK？")

    if (result) {
      console.log(`URL is ${url}`);

      const params = {
        method: "DELETE"
        // body: JSON.stringify({"name": colorName}),
        // mode: "cors",
        // headers:{'Content-Type': 'application/json'}
      }
      fetch(url, params)
        .then(data => console.log(data))
        .catch(err => console.log(err));
    } else {
      console.log("削除中止");
    }

  }

  return (
    <>
      <nav>
        {values.map(value => (
          // 各ページの詳細が表示されないので修正する
          <div key={value.id}>
              {value.name}
              <button>edit</button>
              <button onClick={() => deleteValue(value.id)}>delete</button>
          </div>
        ))}
      </nav>
    </>
  );
}

export default Lists;