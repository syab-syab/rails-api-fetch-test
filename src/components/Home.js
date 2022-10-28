import React from 'react'
import { useState } from 'react'
import PostForm from './PostForm'
import EditForm from './EditForm'
import ManagementColor from './ManagementColor'

export default function Home() {
  // postのモーダルウィンドウの真偽値
  // const [showPostForm, setShowPostForm] = useState(false)

  // editのモーダルウィンドウの真偽値
  // const [showEditForm, setShowEditForm] = useState(false)

  // postボタンの真偽値のハンドル
  // const handleShowPost = () => {
  //   setShowPostForm(!showPostForm)
  //   console.log(showPostForm)
  // }

  // editボタンの真偽値のハンドル
  // const handleShowEdit = () => {
  //   setShowEditForm(!showEditForm)
  //   console.log(showEditForm)
  // }

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
      {/* いずれは他のモデルでもやるけどまずはcolorから */}
      <ManagementColor />
      <PostForm />
      <EditForm />
      {/* PostとEditのフォームを同時に出さないようにする */}
      {/* 2つのフォームはコンポーネントに切り出す */}
      {/* { (showPostForm && !showEditForm) &&
        <PostForm func={handleShowPost}/>
      } */}
      {/* { (showEditForm && !showPostForm) &&
        <EditForm func={handleShowEdit} />
      } */}
    </div>
  )
}
