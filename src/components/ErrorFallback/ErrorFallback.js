import React from 'react';
import AppBar from '../AppBar/AppBar';
import Layout from '../Layout/Layout';
import cx from './ErrorFallback.module.scss';

const ErrorFallback = (error) => (
  <>
    <AppBar />
    <Layout>
      <div className={cx.ErrorFallback}>
        <div className={cx.ErrorFallback__MessageWrapper}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
          </svg>
          <h1>Ups, algo salió mal.</h1>
        </div>
        <div>
          <pre>{error && error.error?.message}</pre>
        </div>
      </div>
    </Layout>
  </>
);

export default ErrorFallback;
