const useFetchDelete = (id, model) => {
    const result =  window.confirm("削除してもOK？")

    if (result) {
      console.log(`URL is http://localhost:3000/${model}/${id}`);
      const params = {
        method: "DELETE"
      }
      setTimeout(() => {
        fetch(`http://localhost:3000/${model}/${id}`, params)
          .then(window.location.reload())
      }, 1000);
      
    } else {
      console.log("削除中止");
    }
}

export default useFetchDelete;