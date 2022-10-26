import React from 'react'
// 管理画面のSomethingのリスト

const ManagementSomething = () => {
  return (
  <div>
    <h3>Something</h3>
    {/* Postをクリックしたらフォームがポップアップするように */}
    <h4><button onClick={() => handleShowPost()}>Post</button></h4>
    <div>
      <ul>
        {/* EditとDeleteをクリックしたらポップアップでフォームが出てくるようにする */}
        <li>値1 | <button onClick={() => handleShowEdit()}>Edit</button> | <a href="#">Delete</a></li>
        <li>値1 | <button onClick={() => handleShowEdit()}>Edit</button> | <a href="#">Delete</a></li>
        <li>値1 | <button onClick={() => handleShowEdit()}>Edit</button> | <a href="#">Delete</a></li>
        <li>値1 | <button onClick={() => handleShowEdit()}>Edit</button> | <a href="#">Delete</a></li>
      </ul>
    </div>
  </div>
  )
}

export default ManagementSomething