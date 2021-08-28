$(() => {
  init();
})

const init = async () => {

  try {
    let data = await doApi("https://coronavirus-19-api.herokuapp.com/countries");
    console.log(data);
    filterCountries(data);
  }
  catch (err) {
    console.log(err)
  }
}

const filterCountries = (_ar) => {
  // נשלוף רק את המדינות ישראל, ארצות הברית וסין
  let countries_ar = ["Israel", "USA", "China"]

  //reduce
  let filter_ar = _ar.filter(item => {
    return (countries_ar.includes(item.country))
  })
  console.log(filter_ar)
}

const doApi = async (_url) => {
  try {
    let resp = await fetch(_url);
    let data = await resp.json();
    // פונקציה שהיא אסיכרונית ומחזירה מידע
    // תמיד המידע יחזור כפרומיס
    return data;
  }
  catch (err) {
    return data;
    console.log(err);
  }
}