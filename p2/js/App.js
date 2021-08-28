$(() => {
  init();
})

const init = () => {
  
  doApi("https://deezerdevs-deezer.p.rapidapi.com/search?rapidapi-key=0553c29e4bmsh3a239d5a07dbdb4p1e9ae1jsnc9399dacde13&q=Omer/Adam&fbclid=IwAR38IR6zx0Mu5AmMc4IbMin4ITLwQF938FXnMg97tZvbP6tSpQgZTDGOxFw")
  viewEventInit();
  
}