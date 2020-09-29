import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Album from './album';
import Home from './home';
import SignIn from './signin';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/album' component={Album}/>
          <Route path='/signin' component={SignIn}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
