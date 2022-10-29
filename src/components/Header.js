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
        <Link to="/">Color</Link> /
        <Link to="manage-something">Something</Link>/
        <Link to="manage-caffeine">Caffeine(これは要らないかも)</Link> /
        <Link to="manage-tea">Tea</Link> /
        <Link to="manage-type">Type</Link>
      </p>
  </header>
  )
}
