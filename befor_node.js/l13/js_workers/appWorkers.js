window.onload = function(){
  init();
}

function init(){
  createWorkers()
}

function createWorkers(){
  let worker1 = new WorkerClass("#id_parent","pic2.jpg","moshe cohen",50,"tel aviv");
   worker1.renderToHtml();

  let worker2 = new WorkerClass("#id_parent","pic3.jpg","koko akof",40,"koko akof");
    worker2.renderToHtml();
}