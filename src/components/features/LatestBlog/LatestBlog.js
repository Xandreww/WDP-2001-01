import React from 'react';
import PropTypes from 'prop-types';

import styles from './LatestBlog.module.scss';
import BlogBox from '../../common/BlogBox/BlogBox';

const LatestBlog = ({ blogs }) => {
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
          {blogs.map(blog => {
            return <BlogBox {...blog} key={blog.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

LatestBlog.propTypes = {
  blogs: PropTypes.array,
};

export default LatestBlog;
