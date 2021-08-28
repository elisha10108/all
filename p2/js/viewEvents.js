const viewEventInit = () => {
  $("#search_btn").on("click",() => {
    if($("#id_input").val()!= ""){
    searchInit();
    }
  })
  $("#id_input").on("keyup",(ev) => {
    if(ev.keyCode == 13){
      if($("#id_input").val()!= ""){
      searchInit();
    } 
  }
  }) 

  $("#select_sort").on("change", () => {
  let chack= "https://deezerdevs-deezer.p.rapidapi.com/search?rapidapi-key=0553c29e4bmsh3a239d5a07dbdb4p1e9ae1jsnc9399dacde13&q="+ 
  $("#select_sort").val();  
  doApi(chack);

  })
  $("#select_sort1").on("change", () => {
    sortmusic($("#select_sort1").val());  
  })
}

const searchInit =  () =>{
    let searchQ = $("#id_input").val();
      let myUrl = "https://deezerdevs-deezer.p.rapidapi.com/search?rapidapi-key=0553c29e4bmsh3a239d5a07dbdb4p1e9ae1jsnc9399dacde13&q="+searchQ;
      doApi(myUrl);
      $("#id_input").val("");
}