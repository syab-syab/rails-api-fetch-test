import React from 'react'
import { useState } from 'react'

export default function Home() {
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

  // post, editのフォームに入力された値を保存するstateを定義する

  return (
    <div>
      {/* ここに管理画面風のデザインを入れる */}
      {/* 各モデルごとに切り替えられるようにする */}
      {/* POST,EDIT,DELETEをこのページで完結できるようにする */}
      <p>
        {/* 表示されているモデルはaタグで囲わないように */}
        <a href="#">Color</a> / 
        <a href="#">Something</a> /
        <a href="#">Caffeine(これは要らないかも)</a> /
        <a href="#">Tea</a> /
        <a href="#">Type</a>
      </p>
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
      {/* PostとEditのフォームを同時に出さないようにする */}
      { (showPostForm && !showEditForm) &&
      <>
        <p>Post</p>
        <form>
          <label>値:</label><input type="text" />
          <button>登録</button>
        </form>
      </>
      }
      { (showEditForm && !showPostForm) &&
        <>
          <p>Edit</p>
          <form>
            <label>値:</label><input type="text" />
            <button>登録</button>
          </form>
        </>
      }
    </div>
  )
}
