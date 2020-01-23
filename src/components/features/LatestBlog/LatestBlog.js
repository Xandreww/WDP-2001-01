import React from 'react';

import styles from './LatestBlog.module.scss';
import BlogBox from '../../common/BlogBox/BlogBoxContainer';

const LatestBlog = blogBox => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className='row no-gutters align-items-end'>
            <div className={'col-auto ' + styles.heading}>
              <h3>Latest Blog</h3>
            </div>
            <div className={'col ' + styles.menu}></div>
            <div className={'col-auto ' + styles.dots}>
              <ul>
                <li>
                  <a href='#0'> </a>
                </li>
                <li>
                  <a href='#1'> </a>
                </li>
                <li>
                  <a href='#2'> </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.blogBox}>
          <BlogBox />
          <BlogBox />
          <BlogBox />
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
