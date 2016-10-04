import React from 'react';
import ReactDOM from 'react-dom';

import MenuBarItem from 'core/MenuBarItem';

class MenuBar extends React.Component {
  render() {
    return (
      <div id="menu-bar">
        <div id="menu-bar-top">
          <MenuBarItem />
          <MenuBarItem />
          <MenuBarItem />
        </div>
        <div id="menu-bar-bottom">
          <MenuBarItem />
          <MenuBarItem />
        </div>
      </div>
    )
  }
}

export default MenuBar

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';

function Header() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <Navigation className={s.nav} />
        <div className={s.banner}>
          <h3 className={s.bannerTitle}>WebV Systems</h3>
        </div>
      </div>
    </div>
  );
}

export default withStyles(s)(Header);
