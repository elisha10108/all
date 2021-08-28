window.onload = function() {
  for(let i = 0;i < 8 ; i++){
    document.body.innerHTML += `
      <img src="images/pic${i+1}.jpg" width="140" >
      <br>
    `;
  }
}