import React from 'react'
// 管理画面のPostのポップアップ

const PostForm = ({func}) => {
  return (
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
              <button onClick={() => func}>登録</button>
            </form>
          </div>
  
        </div>
  )
}

export default PostForm