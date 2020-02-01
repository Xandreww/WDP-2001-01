import React from 'react';
import styles from './SinglePost.module.scss';
import PropTypes from 'prop-types';

const SinglePost = ({ blog }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className={'row'}>
        <div className={'col'}>
          <h2>{blog[0].title}</h2>
        </div>
      </div>
      <div className={'row ' + styles.imagePart}>
        <div className={'col'}>
          <img className={styles.image} src={blog[0].image} alt={blog[0].title} />
        </div>
        <p className={styles.postAuthor}>{blog[0].author}</p>
        <p className={styles.postDate}>{blog[0].date}</p>
      </div>
      <div className={'row'}>
        <div className={'col'}>
          <p>Content...</p>
          <p>{blog[0].sampleText}</p>
        </div>
      </div>
      <div className={'row'}>
        <div className={'col'}>
          <h2>Comments:</h2>
        </div>
      </div>
      <div className={'row'}>
        <div className={'col'}>
          <p>{blog[0].comments[0].comment1}</p>
          <h3>{blog[0].commentAuthors[0].author1}</h3>
        </div>
        <div className={'col'}>
          <p>{blog[0].comments[1].comment2}</p>
          <h3>{blog[0].commentAuthors[1].author2}</h3>
        </div>
        <div className={'col'}>
          <p>{blog[0].comments[2].comment3}</p>
          <h3>{blog[0].commentAuthors[2].author3}</h3>
        </div>
        <div className={'col'}>
          <p>{blog[0].comments[3].comment4}</p>
          <h3>{blog[0].commentAuthors[3].author4}</h3>
        </div>
      </div>
    </div>
  </div>
);

SinglePost.propTypes = {
  blog: PropTypes.object,
};

export default SinglePost;
