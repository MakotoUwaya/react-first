import React from 'react';
import Link from '@material-ui/core/Link';
import logo from './logo.svg';
import './App.css';

function Home() {
  return (
    <div className="aaa">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link href="/album" variant="body2">
          {"Learn React"}
        </Link>
      </header>
    </div>
  );
}

export default Home;
