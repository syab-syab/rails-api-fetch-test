import React from 'react'

const ManagementColor = () => {
  // postのモーダルウィンドウの真偽値
  const [showPostForm, setShowPostForm] = useState(false)

  // editのモーダルウィンドウの真偽値
  const [showEditForm, setShowEditForm] = useState(false)

  // postボタンの真偽値のハンドル
  const handleShowPost = () => {
    setShowPostForm(!showPostForm)
    console.log(showPostForm)
  }

  // editボタンの真偽値のハンドル
  const handleShowEdit = () => {
    setShowEditForm(!showEditForm)
    console.log(showEditForm)
  }

  return (
    <div>
      <h3>Color</h3>
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

export default ManagementColor