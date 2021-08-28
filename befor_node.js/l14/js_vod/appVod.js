window.onload = function(){
  init();
}

function init(){
  //createSeries();
  createAllSeriesFromJson();
}

function createAllSeriesFromJson(){
  // for(let i = 0 ; i < json_ar.length; i++){
  //   let item = json_ar[i]
  // }
  // 13:15


  json_ar.forEach(function(item){
    let series = new SeriesClass("#id_row",item.image,item.name,item.views,item.seasons,item.descrption);
    series.render();
  })
}

// בוטל הפונקציה מטה
// vodManager במציאות היה בקובץ
function createSeries(){
  let series = new SeriesClass("#id_row","simpsons.jpg","The Simpsons",1000,30,"bla bla bla bal simpsons");
  series.render();

  let series2 = new SeriesClass("#id_row","south.jpg","South Park",1000,24,"bla bla bla bal south park");
  series2.render();
}