import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useDispatch} from 'react-redux';

import './App.scss';
import HomePage from './Pages/HomePage';
import {getRecipes} from './actions/recipeActions';
import {getSpecials} from './actions/specialsActions';
function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
    dispatch(getSpecials());
}, [dispatch])
 

  return (
    <div className="App">
        <Router>
          <Switch>
            
            <Route path='/' exact component={HomePage}/>

          </Switch>
        </Router>
    </div>
  );
}

export default App;
