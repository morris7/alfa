import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import './App.css';
import Logo from './assets/logo.svg';
import TaskList from './components/TaskList';
import TaskDetail from './components/TaskDetail';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Header>
        <Link to="/">
          <img src={Logo} />
        </Link>
      </Header>
      <Main>
        <div>
          <Switch>
            <Route path="/" exact component={TaskList} />
            <Route path="/Task/:id" component={TaskDetail} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Main>
    </Router>
  );
}

const Header = styled.header`
  background: #292d45;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.23), 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  padding: 1em;
`;

const Main = styled.main`
  display: flex;
  flex-direction: row;
  flex: 1;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 15px;
  }
`;

export default App;
