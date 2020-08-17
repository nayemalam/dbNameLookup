// external impors
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
// page imports
import Home from './pages/Home';
import NameList from './pages/NameList';
import NotFound from './pages/NotFound';
// component imports
import Navigation from './components/Navigation';
// internal css imports
import './global.scss';

function App() {
  return (
    <div className="app">
      <CssBaseline>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/names" component={NameList} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </CssBaseline>
    </div>
  );
}

export default App;
