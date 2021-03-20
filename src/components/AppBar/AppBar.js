import React from 'react';
import cx from './AppBar.module.scss';
import Layout from '../Layout/Layout';
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';


const appBar = () => {
  return (
    <header className={cx.AppBar}>
      <Layout>
        <div className={cx.AppBar__Container__ContentWrapper}>
          <Logo width={53}/>
          <SearchBar fullWidth className={cx.AppBar__Container__ContentWrapper__SearchBar}/>
        </div>
      </Layout>          
    </header>
  )
}

export default appBar;