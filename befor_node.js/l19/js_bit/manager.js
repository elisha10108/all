const createCoins = (_ar) => {
  _ar.map(item => {
    let coin = new Coin("#id_row",item);
    coin.render();
  })
}