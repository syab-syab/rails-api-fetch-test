const useFetchEdit = (id, value, model, func) => {
  const result =  window.confirm("編集してもOK？")

  if (result) {
    const params = {
      method: "PUT",
      // valueとキーはモデルごとに数が違うから配列かオブジェクトで渡せるよう後ほど修正
      // Object.keys(オブジェクト)でオブジェクトのキーを
      // Object.values(オブジェクト)でオブジェクトの値を
      // 取得できる
      body: JSON.stringify(value),
      headers:{'Content-Type': 'application/json'}
    }

    setTimeout(() => {
      fetch(`http://localhost:3000/${model}/${id}`, params)
      // 編集後にページをリロード
        .then(window.location.reload())
    }, 1000)
    func()
  } else {
    alert("編集中止");
  }

}

export default useFetchEdit;