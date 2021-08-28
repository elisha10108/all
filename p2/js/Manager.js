let music_ar;

const doApi = async(_url) => {
  let resp = await fetch(_url);
  let data = await resp.json();
  createMusic(data.data);

  // sortMusic(music_ar)
}

const createMusic = (_ar) => {
  $("#id_row").empty();
  _ar.map(item => {
    createAppMusic("#id_row",item)
  })
  music_ar =_ar;
}


const sortmusic = (_sort) => {
  music_ar = _.sortBy(music_ar,_sort);
  music_ar.reverse()
  createMusic(music_ar)
}

