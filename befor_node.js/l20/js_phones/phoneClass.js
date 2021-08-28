class Phone {
  constructor(_parent, _item){
    this.parent = _parent;
    this.img = _item.img_url;
    this.name = _item.name;
    this.price = _item.price;
  }

  render(){
    let newDiv = $("<div class='border p-2 col-lg-7'></div>");
    $(this.parent).append(newDiv);

    $(newDiv).append(`
    <img src="${this.img}" class="w-25 float-left mr-2" >
    <h2>${this.name}</h2>
    <div>Price: ${this.price} NIS</div>
    `)
  }
}




// battery_mah: "3400"
// battery_score: "60"
// camera_score: "89"
// company_id: "2"
// connect_score: "10"
// cpu: "Snapdragon 855"
// gpu: "Qualcomm Adreno 640"
// id: "1"
// img_url: "https://cdn-files.kimovil.com/devicerender/0003/22/thumb_221858_devicerender_small.jpeg"
// m_pixel: "12"
// name: "Galaxy s10"
// pref_score: "416"
// price: "2400"
// ram: "8"
// screen_size: "6.1"
// storage_gb: "128"
// total_score: "99"