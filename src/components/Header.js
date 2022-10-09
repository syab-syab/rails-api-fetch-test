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
  </header>
  )
}
