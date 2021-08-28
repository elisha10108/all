import React from 'react';
import Header from './header';
import Homelist from './homeList';

function Home(props){
  return(
    <React.Fragment>
      <Header />
      <Homelist />
    </React.Fragment> 
  )
}

export default Home