import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.css';
import Link from '../Link';

function Footer() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <span className={s.footerLeft}>WebV Systems © 2016 NLG Foundation Trust</span>
        <span className={s.footerRight}>SESSION TIME REMAINING 28:30</span>
      </div>
    </div>
  );
}

export default withStyles(s)(Footer);
