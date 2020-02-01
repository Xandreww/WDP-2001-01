import React from 'react';
import styles from './SinglePost.module.scss';
import PropTypes from 'prop-types';

const SinglePost = ({ blog }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className={'row'}>
        <div className={'col'}>
          <p>author</p>
        </div>
        <div className={'col'}>
          <p>date</p>
        </div>
      </div>
      <div className={'row'}>
        <div className={'col'}>
          <h2>Title</h2>
        </div>
      </div>
      <div className={'row'}>
        <div className={'col'}>
          <p>Content...</p>
          <p>{blog[0].sampleText}</p>
        </div>
      </div>
      <div className={'row'}>
        <div className={'col'}>
          <h3>Comment1</h3>
          <p>Comment...</p>
        </div>
        <div className={'col'}>
          <h3>Comment2</h3>
          <p>Comment...</p>
        </div>
        <div className={'col'}>
          <h3>Comment3</h3>
          <p>Comment...</p>
        </div>
        <div className={'col'}>
          <h3>Comment4</h3>
          <p>Comment...</p>
        </div>
      </div>
    </div>
  </div>
);

SinglePost.propTypes = {
  blog: PropTypes.object,
};

export default SinglePost;
