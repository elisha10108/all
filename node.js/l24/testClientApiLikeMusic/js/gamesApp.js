$(() => {
  init();
})

const init = () => {
  doApi("https://api.rawg.io/api/games?page=1&page_size=20&search=red+alert")
  viewEventInit();
}