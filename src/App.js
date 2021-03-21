import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import AppBar from './components/AppBar/AppBar';
import SearchResult from './components/SearchResult/SearchResult';
import ItemDetail from './components/ItemDetail/ItemDetail';
import ErrorFallback from './components/ErrorFallback/ErrorFallback';
import classes from './App.module.scss';

const errorHandler = (error, info) => {
  // send data to any error client such as Sentry.io
  console.log('[Error] Sending Data to Sentry', error, info); // eslint-disable-line no-console
};

function App() {
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <ErrorBoundary FallbackComponent={ErrorFallback} onError={errorHandler}>
          <HelmetProvider>
            <AppBar />
            <Switch>
              <Route path="/items/:id">
                <ItemDetail />
              </Route>
              <Route path="/items">
                <SearchResult />
              </Route>
            </Switch>
          </HelmetProvider>
        </ErrorBoundary>
      </div>
    </BrowserRouter>
  );
}

export default App;
