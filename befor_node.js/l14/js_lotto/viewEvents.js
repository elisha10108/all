// קובץ שיכיל את כל האיבינטים שנמצאים מראש בבאדי
const declareViewEvents = () => {
  document.querySelector("#start_btn").addEventListener("click",() =>{
    resetIcons();
    startAddIcons();
  })
}