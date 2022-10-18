// エラーが出たから後回し
// 多分、頭にuseとか付けたのが原因かも
// return あたりが怪しい
// useEffectとか必要かも
// import { useEffect } from "react";
// import { useState } from "react";

const useFetchEdit = (model) => {
  // 苦肉の策
  // const [isEdit, setIsEdit] = useState(null)

  // const url = `http://localhost:3000/${model}/${id}`
  // const url = `http://localhost:3000/colors/${id}`
  // const result =  window.confirm("編集してもOK？");

  // useEffect(() => {
  //   if (result) {
  //     const params = {
  //       method: "PUT",
  //       body: JSON.stringify({"name": value}),
  //       headers:{'Content-Type': 'application/json'}
  //     }
  //     fetch(url, params);
  //     alert("編集完了");
  //     return;
  //   } else {
  //     console.log("編集中止")
  //     return;
  //   }
  // })
  alert(model)

}

export default useFetchEdit;