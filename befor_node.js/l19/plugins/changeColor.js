// jquery plugin
// פלאגין- נותן את היכולת לדבר עם הסלקטור 
$.fn.colorPlug = function(_bg,_color) {
  $(this).css("background",_bg);
  $(this).css("color",_color);
};



$.fn.showAlert = function(_message){
  $(this).on("click", () => {
    alert(_message);
  })
}