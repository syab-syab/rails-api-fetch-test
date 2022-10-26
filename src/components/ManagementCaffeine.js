import React from 'react'
// 管理画面のCaffeineのリスト

const ManagementCaffeine = () => {
  return (
    <div>
      <h3>モデル名</h3>
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

export default ManagementCaffeine