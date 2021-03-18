import React from 'react';
import classes from './App.module.scss';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import AppBar from './components/AppBar/AppBar';
import SearchResult from './components/SearchResult/SearchResult';
import ItemDetail from './components/ItemDetail/ItemDetail';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback/ErrorFallback';

const errorHandler = (error, info) => {
  // send data to any error client such as Sentry.io
  console.log('[Error] Sending Data to Sentry', error, info);
}

function App() {
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <ErrorBoundary FallbackComponent={ErrorFallback} onError={errorHandler}>
          <AppBar/>
          <Switch>
            <Route path="/items/:id">
              <ItemDetail />
            </Route>
            <Route path="/items">
              <SearchResult />
            </Route>
          </Switch>
        </ErrorBoundary>
      </div>
    </BrowserRouter>
  );
}

export default App;
