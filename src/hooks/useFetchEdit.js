// エラーが出たから後回し
// 多分、頭にuseとか付けたのが原因かも
// return あたりが怪しい
// useEffectとか必要かも
import { useEffect } from "react";
import { useState } from "react";

// id, value, modelを引数(propsに取る)
// 引数は多分問題なし
const useFetchEdit = (id, value, model) => {

  const [editId, setEditId] = useState()
  const [editVal, setEditVal] = useState()
  const [editModel, setEditModel] = useState()

  // const url = `http://localhost:3000/${model}/${id}`
  // const url = `http://localhost:3000/colors/${id}`
  // const result =  window.confirm("編集してもOK？");

  // 問題はここ　↓　↓　↓　から
  useEffect(() => {
  //   if (result) {
      alert("開始")
      setEditId(id)
      setEditVal(value)
      setEditModel(model)
      const url = `http://localhost:3000/${editModel}/${editId}`
      alert("編集開始")
      const params = {
        method: "PUT",
        // body: JSON.stringify({"name": value}),
        body: JSON.stringify({"name": editVal}),
        headers:{'Content-Type': 'application/json'}
      }
      fetch(url, params);
      alert("完了")
      // return isEdit;
    // } else {
    //   console.log("編集中止")
    //   return;
    // }
  }, [])
  // ここまで　↑　↑　↑　のどこか
  // alert("test is " + id + " and " + model + " and " + value)
  // alert(url)

}

export default useFetchEdit;