import React from 'react'

export default function Home() {
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
      <h4><a href="#">Post</a></h4>
      <div>
        <ul>
          {/* EditとDeleteをクリックしたらポップアップでフォームが出てくるようにする */}
          <li>値1 | <a href="#">Edit</a> | <a href="#">Delete</a></li>
          <li>値1 | <a href="#">Edit</a> | <a href="#">Delete</a></li>
          <li>値1 | <a href="#">Edit</a> | <a href="#">Delete</a></li>
          <li>値1 | <a href="#">Edit</a> | <a href="#">Delete</a></li>
        </ul>
      </div>
    </div>
  )
}
