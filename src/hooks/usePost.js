const usePost = (value, model) => {
  const result =  window.confirm("投稿してもOK？");
  if (result) {
    const params = {
      method: "POST",
      body: JSON.stringify({"name": value}),
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