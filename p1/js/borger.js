
$(() => {
  init();
  // viewEvents();
})

const init = () => {

    $("#id_burger").on("click", () => { 
     $("#id_nav_burger").slideToggle();
    })
 
}






