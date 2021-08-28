$(() => {
  init();
})

const init = () => {
  resetApp();
  createPagesUi();
}

const createPagesUi = async() => {
  let url = "http://localhost:3000/students/count";
  let pages = await numOfPagesInCollection(url,10);
  console.log(pages);
  for(let i = 0 ; i < pages ; i++){
    console.log(i);
    $("#id_pages").append( `<a href="showStudents.html?page=${i}"> ${i+1}</a> |`);
  }
}

const resetApp = () => {
   // ככה אוספים בצד לקוח את הקווארי סטרינג
   let urlParams = new URLSearchParams(window.location.search);
   let myParam_page = urlParams.get('page');
   myParam_page = (myParam_page) ? myParam_page : 0;
   // console.log(myParam_page);
 
   let url = "http://localhost:3000/students/?reverse=yes&sort=_id&page="+myParam_page;
   doApiManager(url);
}
// 10:55



