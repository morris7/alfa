import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Logo from './assets/logo.svg';
import TaskList from './components/TaskList';
import TaskDetail from './components/TaskDetail';

function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <img src={Logo} />
        </Link>
      </header>
      <main>
        <div id="main">
          <Route path="/" exact component={TaskList} />
          <Route path="/task/:id" exact component={TaskDetail} />
        </div>
      </main>
    </Router>
  );
}

export default App;
