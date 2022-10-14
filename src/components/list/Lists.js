import React from 'react'

const Lists = ({values}) => {
  return (
    <>
      <nav className="content-list">
        {values.map(color => (
          // 各ページの詳細が表示されないので修正する
          <div key={color.id}>
              {color.name}
          </div>
        ))}
      </nav>
    </>
  );
}

export default Lists;