// エラーが出たから後回し
// 多分、頭にuseとか付けたのが原因かも
// return あたりが怪しい
// useEffectとか必要かも


const useFetchEdit = (id, value, model) => {
  const url = `http://localhost:3000/${model}/${id}`
  // const url = `http://localhost:3000/colors/${id}`
  const result =  window.confirm("編集してもOK？");
  
  if (result) {
    const params = {
      method: "PUT",
      body: JSON.stringify({"name": value}),
      headers:{'Content-Type': 'application/json'}
    }
    fetch(url, params);
    alert("編集完了");
    return;
  } else {
    console.log("編集中止")
    return;
  }
}

export default useFetchEdit;