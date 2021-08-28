function addInput(_parent, _id, _txt, _type) {
  document.querySelector(_parent).innerHTML += `
  <div>
  <label for="${_id}">${_txt}</label>
  <input id="${_id}" type="${_type}" class="col-lg-6 form-control">
</div>
  `
}