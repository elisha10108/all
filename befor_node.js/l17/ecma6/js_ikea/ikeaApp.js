window.onload = () => {
  init();
}

const init = () => {
  renderTables();
}

const renderTables = () => {
  let item ={ legs:4, meter:3}
  let table_regular = new Table("body",item);
  table_regular.render();

  let item2 = {legs:5 , meter:2 , shape:"pentagon"}
  let table_pentagon = new SpecialTable("body",item2)
  table_pentagon.render();
  table_pentagon.renderPrice();
}