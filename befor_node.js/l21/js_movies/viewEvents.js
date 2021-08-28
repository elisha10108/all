import { doMangerApi,sortMoviesBy } from "./manageMov.js";

export const viewEventsInit = () => {
  $("#search_btn").on("click",() => {
    let searchQ = $("#id_search").val().trim();
    let myUrl = `http://www.omdbapi.com/?s=${searchQ}&apikey=5a292f28`;
    doMangerApi(myUrl);
  })

  $("#id_sort_select").on("change",() => {
    let sorTby = $("#id_sort_select").val();
    sortMoviesBy(sorTby)
  })
}

// 14:37