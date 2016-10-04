/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import System from '../../components/System';
import s from './Content.css';

function Content({ path, title, content }) {
  return (
    <System>
      <div className={s.root}>
        <div className={s.container}>
          {title && path !== '/' && <h1>{title}</h1>}
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </System>
  );
}

Content.propTypes = {
  path: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default withStyles(s)(Content);
