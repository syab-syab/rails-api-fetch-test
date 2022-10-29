import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <p>Railsで作ったAPIからデータのやり取りをするテスト</p>
      <Link to="/">Home</Link><br />
      <Link to="/post-teas">teaのPOSTのテスト</Link><br />
      <Link to="/post-somethings">somethingのPOSTのテスト</Link><br />
      <Link to="/post-colors">colorのPOSTのテスト</Link>
      <p>
        {/* 表示されているモデルはaタグで囲わないように */}
        <a href="#">Color</a> / 
        <a href="#">Something</a> /
        <a href="#">Caffeine(これは要らないかも)</a> /
        <a href="#">Tea</a> /
        <a href="#">Type</a>
      </p>
  </header>
  )
}
