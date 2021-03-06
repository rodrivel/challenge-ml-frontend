import React from 'react';
import { Router, Route } from 'react-router';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
const history = createMemoryHistory();

export const renderWithRouter = Component => render(
  <Router history={history}>
    <Route component={Component} />
  </Router>
)