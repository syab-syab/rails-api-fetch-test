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
      // body: JSON.stringify({"name": "tougarashi"}),
      headers:{'Content-Type': 'application/json'}
    }


    // setTimeout(() => {
      fetch(`http://localhost:3000/${model}/${id}`, params)
      // 編集後にページをリロード
        // .then(alert(`params = ${params}`))
        .then(window.location.reload())
        .catch(err => console.log(err))
    // }, 1000)
    func()
    // console.log(params)
  } else {
    alert("編集中止");
  }

}

export default useFetchEdit;