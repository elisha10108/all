import React, { useEffect, useState } from 'react';
import _ from "lodash";
import HeaderVod from './headerVod';
import "./css/vod.css"
import NavVod from './navVod';
import VodList from './vodList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SingleVod from './singleVod';

function AppVod(props) {
  let [vod_ar, setVodAr] = useState([]);

  //TODO: שעושים חיפוש מהתחלה יעשה סורט לפי מה שמוצג בסלקט
  useEffect(() => {
    doApi("red")
    
  }, [])

  const doApi = async (_searchQ) => {
    let url = `http://www.omdbapi.com/?s=${_searchQ}&apikey=5a292f28`;
    let resp = await fetch(url);
    let data = await resp.json();
    console.log(data.Search);
    if (data.Search) {
      setVodAr(data.Search)
      // sortBy("Year")
    }
    else {
      console.log("aaa");
      setVodAr([])
    }
  }

  const sortBy = (_sortBy) => {
    // console.log(_sortBy)
    let temp_ar = _.sortBy(vod_ar, _sortBy);
    console.log(temp_ar);
    setVodAr(temp_ar);
  }
  // React.Fragment -> תגית שמתקתפלת הדפדפן לא מתייחס אליה
  // אך עדיין נותנת לעטוף כתגית ראשונה בג'יי אס איקס
  return (
    <Router>
      <React.Fragment>
        <HeaderVod />
        <NavVod sortBy={sortBy} doApi={doApi} />
        <Switch>
          {/* <Route exact path="/" component={VodList} /> */}
          {/* render-> במידה וצריך להעביר פרופס לקומפ נשתמש בשיטה הזאת */}
          <Route exact path="/" render={() => <VodList vod_ar={vod_ar} /> } />
          {/* component -> במידה ואנחנו חייבים לאסוף פרמטר מהיו אר אל אז עדיף השיטה הזאת */}
          <Route exact path="/info/:idMovie" component={SingleVod} />
        </Switch>
      </React.Fragment>
    </Router>
  )
}

export default AppVod