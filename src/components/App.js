import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import SearchRecipes from './SearchRecipes';
import FavoriteRecipes from './FavoriteRecipes';
import NotFound from './NotFound';

class App extends Component {
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path='/' component={SearchRecipes} />
          <Route path='/favorites' component={FavoriteRecipes} />
          <Route component={NotFound}/>
        </Switch>
      </Router>
    )
  }
}

export default App;