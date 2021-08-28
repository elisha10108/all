const createSeries = (_ar) => {
  _ar.forEach(item => {
    let series = new SeriesClass("#id_row",item.image,item.name,item.views,item.seasons,item.descrption);
    series.render();
    // console.log(item);
  })
}