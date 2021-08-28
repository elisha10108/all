let games_ar;

const doApi = async(_url) => {
  let resp = await fetch(_url);
  let data = await resp.json();
  console.log(data);
  createGames(data.results)
}

const createGames = (_ar) => {
  $("#id_row").empty();
  _ar.map(item => {
    createOneGame("#id_row",item)
  })
  games_ar = _ar;
}

const  createOneGame = (_parent,item) => {
  let newDiv = $("<div class='col-lg-4 border'></div>");
  $(_parent).append(newDiv);

  $(newDiv).append(`
    <img src="${item.background_image}" alt="game" class="w-100">
    <h4>${item.name}</h4>
  `)
}

const sortGameBy = (_sort) => {
  games_ar = _.sortBy(games_ar,_sort);
  games_ar.reverse()
  createGames(games_ar)
}