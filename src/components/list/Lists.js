import React from 'react'

const Lists = ({values}) => {

  // 編集画面へ遷移
  // const moveUpdate = () => {

  // }

  const deleteValue = () => {
    
  }

  return (
    <>
      <nav>
        {values.map(value => (
          // 各ページの詳細が表示されないので修正する
          <div key={value.id}>
              {value.name}
              <button>edit</button>
              <button>delete</button>
          </div>
        ))}
      </nav>
    </>
  );
}

export default Lists;