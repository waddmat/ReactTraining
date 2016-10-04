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
