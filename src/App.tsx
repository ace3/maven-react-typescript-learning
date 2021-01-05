import {Detail, Home, List} from './screens'
import {Link, Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import { Menu, MenuItem } from './components/Header';

import React from 'react';

function App() {
  return (
    <Router>
      <div className="container mx-auto">
        <Menu>
          <MenuItem to="/" title="Home"/>
            <MenuItem to="/list" title="List"/>
        </Menu>
        <Switch><Route exact path="/" component={Home}></Route>
          <Route  path="/detail/:id" component={Detail}></Route>
          <Route  path="/list" component={List}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
