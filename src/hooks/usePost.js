const usePost = (value, model) => {
  const result =  window.confirm("投稿してもOK？");
  if (result) {
    const params = {
      method: "POST",
      // valueとキーはモデルごとに数が違うから配列かオブジェクトで渡せるよう後ほど修正
      // Object.keys(オブジェクト)でオブジェクトのキーを
      // Object.values(オブジェクト)でオブジェクトの値を
      // 取得できる
      body: JSON.stringify(value),
      headers:{'Content-Type': 'application/json'}
    }
    // const url = `http://localhost:3000/${model}`;
    setTimeout(() => {
      fetch(`http://localhost:3000/${model}`, params)
        .then(window.location.reload());
    }, 1000)
  } else {
    alert("投稿中止");
  }
}

export default usePost;