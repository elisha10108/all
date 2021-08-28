import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function SingleVod(props){
  let [info,setInfo] = useState({})

  useEffect(() => {
    doApiSingle()
  },[])

  const doApiSingle = async() => {
    //   /info/:idMovie
    // props.match.params.idMovie -> כמו באקספרס
    // req.params.idMovie
    let idMovie = props.match.params.idMovie;
    let url = `http://www.omdbapi.com/?i=${idMovie}&apikey=5a292f28`;
    let resp = await fetch(url);
    let data = await resp.json();
    console.log(data);
    setInfo(data)
  }


  return(
    <main className="container py-4 col-lg-6 mx-auto">
      {/* בודק אם יש מאפיין באינפו ואם כן מציג אם לא מציג טוען */}
      {(info.Title) ? 
      <React.Fragment>
        <img src={info.Poster} className="w-25 float-start me-2" />
        <h2>{info.Title}</h2>
        <div>Score: {info.imdbRating}</div>
        <div>Duration: {info.Runtime}</div>
        <div>Released: {info.Released}</div>
        <p>Plot: {info.Plot}</p>
      <Link to="/">Back to list</Link>
       </React.Fragment>
       : 
       <img src="/images/loading.gif" width="200" /> }

    </main> 
  )
}
// 14:50 
export default SingleVod

// 13:20
// לחקור את ה APU שנתתי איך אני מוציא יותר פרטים על 
// סרט ספציפי


