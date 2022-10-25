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
      {/* 2つのフォームはコンポーネントに切り出す */}
      { (showPostForm && !showEditForm) &&
      <div id='overlay'>
        <p>Post</p>
        <div id='content'>
          <form>
            <label>name: </label><input type="text" />
            <br />
            <label>description: </label><textarea></textarea>
            <br />
            <label>caffeine: </label>
            <select>
              <option value="1">多め</option>
              <option value="2">普通</option>
              <option value="3">少なめ</option>
              <option value="4">無し</option>
              <option value="5">不明</option>
            </select>
            <br />
            <label>tea's type: </label>
            <select>
              <option value="1">日本茶</option>
              <option value="2">紅茶</option>
              <option value="3">ハーブティー</option>
              <option value="4">その他</option>
            </select>
            <br />
            <button onClick={() => handleShowPost()}>登録</button>
          </form>
        </div>

      </div>
      }
      { (showEditForm && !showPostForm) &&
        <div id='overlay'>
          <p>Edit</p>
          <div id='content'>
            <form>
              <label>name: </label><input type="text" />
              <br />
              <label>description: </label><textarea></textarea>
              <br />
              <select>
                <option value="1">多め</option>
                <option value="2">普通</option>
                <option value="3">少なめ</option>
                <option value="4">無し</option>
                <option value="5">不明</option>
              </select>
              <br />
              <select>
                <option value="1">日本茶</option>
                <option value="2">紅茶</option>
                <option value="3">ハーブティー</option>
                <option value="4">その他</option>
              </select>
              <br />
              <button onClick={() => handleShowEdit()}>登録</button>
            </form>
          </div>
        </div>
      }
    </div>
  )
}
