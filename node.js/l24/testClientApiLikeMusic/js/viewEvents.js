const viewEventInit = () => {
  $("#search_btn").on("click",() => {
    let searchQ = $("#id_input").val();
    let myUrl = "https://api.rawg.io/api/games?page=1&page_size=20&search="+searchQ;
    doApi(myUrl)
  })

  $("#select_sort").on("change", () => {
    sortGameBy($("#select_sort").val());  
  })
}