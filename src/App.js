import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useDispatch} from 'react-redux';

import history from './history';
import './App.scss';
import HomePage from './Pages/HomePage';
import {getRecipes} from './actions/recipeActions';
import {getSpecials} from './actions/specialsActions';
import CreateSpecial from './Pages/CreateSpecial';
function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
    dispatch(getSpecials());
}, [dispatch])
 

  return (
    <div className="App">
        <Router history={history}>
          <Switch>
            
            <Route path='/' exact component={HomePage}/>
            <Route path='/create' exact component={CreateSpecial}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
