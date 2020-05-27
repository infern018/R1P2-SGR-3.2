import React, { Component } from 'react';
import Nav from './Nav'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SBT from './SBT'
import SGT from './SGT'
import Home from './Home';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/SBT' component={SBT} />
            <Route exact path='/SGT' component={SGT} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
