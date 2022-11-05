const dataMatch = (data, id) => {
  // メインのデータに関連付けられているIDからモデルの名前を付ける
  const color = data.find(element => element.id === id)
  return color
}

export default dataMatch;