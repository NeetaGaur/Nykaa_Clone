import React from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom';
import Categories from './Components/Categories';
import Brands from './Components/Brands';
import NykaaFashion from './Components/NykaaFashion';
import BeautyAdvise from './Components/BeautyAdvise';
import NykaaNetwork from './Components/NykaaNetwork';
import NavBar from './NavBar';

function App() {
  return (
    <>
      <NavBar/>
     <Switch>
       <Route exact path="/categories" component={Categories}/>
        <Route exact path="/brands" component={Brands}/>
       <Route exact path="/fashion" component={NykaaFashion}/>
       <Route exact path="/beautyadvise" component={BeautyAdvise}/>
       <Route exact path="/nykaanetwork" component={NykaaNetwork}/> 
     </Switch>

    </>
  );
}

export default App;
