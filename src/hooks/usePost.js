// エラーが出たから後回し
// 多分、頭にuseとか付けたのが原因かも
// return あたりが怪しい
// useEffectとか必要かも

export default function usePost(value, model) {
  const result =  window.confirm("POSTしてもOK？");
  if (result) {
    const params = {
      method: "POST",
      body: JSON.stringify({"name": value}),
      headers:{'Content-Type': 'application/json'}
    }
    const url = `http://localhost:3000/${model}`;
    fetch(url, params);
    alert("POST完了");
    return true;
  } else {
    alert("中止");
    return true;
  }
}
