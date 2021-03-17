import React from 'react';
import classes from './App.module.scss';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import AppBar from './components/AppBar/AppBar';
import SearchResult from './components/SearchResult/SearchResult';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <AppBar/>
        <Switch>
          <Route path="/items/:id">
            <ProductDetail />
          </Route>
          <Route path="/items">
            <SearchResult />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
