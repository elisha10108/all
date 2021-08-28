import {doApi} from "./pixaManager.js"

export const viewEventsInit = () => {
  $("#search_btn").on("click", () => {
    // trim -> מעיף רווח בהתחלה ובסוף
    let searchQ = $("#id_search").val().trim();
    let urlApi = `https://pixabay.com/api/?key=15489555-318fcca1200a48f374a1ce3ea&q=${searchQ}&image_type=photo&pretty=true`;
    doApi(urlApi);
  })
}