
const usePost = (value, model) => {
  const result =  window.confirm("投稿してもOK？");
  if (result) {
    const params = {
      method: "POST",
      // valueとキーはモデルごとに数が違うから配列かオブジェクトで渡せるよう後ほど修正
      // Object.keys(オブジェクト)でオブジェクトのキーを
      // Object.values(オブジェクト)でオブジェクトの値を
      // 取得できる
      // valueの値(オブジェクト)が項目が2つ以上あるとpostできない(colorのように一つだけなら成功する)
      // ↑setTimeoutのせいでした
      body: JSON.stringify(value),
      headers:{'Content-Type': 'application/json'}
    }
    alert(typeof(params.body))
    // setTimeoutがあるとvalueの値(オブジェクト)が二つ以上あると上手く動かない
    // setTimeout(() => {
      fetch(`http://localhost:3000/${model}`, params)
        .then(window.location.reload());
    // }, 2000)
  } else {
    alert("投稿中止");
  }
}

export default usePost;