import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Album from './album';
import Home from './home';
import SignIn from './signin';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path='/' component={Home}/>
          <Route path='/album' component={Album}/>
          <Route path='/signin' component={SignIn}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
