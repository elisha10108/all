const  createAppMusic = (_parent,item) => {
    let newDiv = $(`<div  class="border-none col-12 col-md-6"></div>`);
    $(_parent).append(newDiv);
  
    $(newDiv).append(`
    <div>  
     
          <h3 class="text-white text-center  " >${item.artist.name}</h3>
          <h4 class="text-white text-center    ">${item.title}</h4>
          <h4 class="text-white text-center    ">rank:${item.rank}:</h4>
          
          
          <a  href="${item.tracklist}"><p class="text-white text-center    ">if you want to listen track</p> </a>
          <a  href="${item.link}"><p class="display-6 text-center float" style="color: #9cf1f7;" >Click for the song</p></a>   
          
          
          </div>
          
          `)
    let nemVido =$( `
    <div>
    <img style="margin: -40px; ;" src="${item.artist.picture}" alt="${item.artist.name}"  class="float-sm-left mb-0  rounded-circle pl-5 " >
    
    <audio  style="margin-left:50px ;" class="w-50  " controls="" src="${item.preview}">
    </audio>  
    </div>
    ` );
    $(newDiv).append(nemVido);
} 