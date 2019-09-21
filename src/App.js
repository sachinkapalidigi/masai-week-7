import React from 'react';
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import Navigation from './components/Navigation/Navigation';
import HotelsHomes from './components/HotelsHomes/HotelsHomes'
import Ads from './components/Ads/Ads'

import Footer from './components/Footer/Footer'

class App extends React.Component{
  
  render(){
    return (
      <div className="container-fluid px-0">
        <Header />   
        <span className="clearfix"></span> 
        <Navigation />
        <SearchBar />     
        <Ads />
        <HotelsHomes />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    );  
  }
}

export default App;
