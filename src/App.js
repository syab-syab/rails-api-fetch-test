import './App.css';
import { useState } from 'react';
import { Routes, Route  } from 'react-router-dom';
import Home from './components/Home';
import PostTeas from './components/PostTeas';
import PostSomethings from './components/PostSomethings';

function App() {

  const [teaName, setTeaName] = useState('test');

  const [indicateValue, setIndicateValue] = useState('');

  const handleChange = (e) => {
    setTeaName(e.target.value);
  }

  const handleClick = (e) => {
    setIndicateValue(teaName);
    setTeaName('');
  } 

  return (
    <div className="App">
      <header>
        <p>Railsで作ったAPIからデータのやり取りをするテスト</p>
      </header>
      <main>
        <Routes path='/'>
          <Route path='/' element={<Home />} />
          <Route path='/post-teas' element={<PostTeas />} />
          <Route path='/post-somethings' element={<PostSomethings />}
        </Routes>
        <section>
        {/* 各input要素を分けた方が良いかも */}
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={teaName}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
          description:
            <textarea
              type="text"
              name="name"
              value={teaName}
              onChange={handleChange}
            ></textarea>
          </label>
          <br />
          <label>
          caffeine:
            <select>
              <option value="1">多め</option>
              <option value="2">普通</option>
              <option value="3">少なめ</option>
              <option value="4">無し</option>
              <option value="5">不明</option>
            </select>
          </label>
          <br />
          <label>
          tea's type:
          <select>
              <option value="1">日本茶</option>
              <option value="2">紅茶</option>
              <option value="3">ハーブティー</option>
              <option value="4">その他</option>
            </select>
          </label>
          <br />
          <input
          // typeをsubmitにするとリロードされてしまう
            type="button"
            value="Submit"
            onClick={handleClick}
          />
        </form>
        <p>{indicateValue}</p>

        </section>
      </main>
    </div>
  );
}

export default App;
