import React, { useEffect } from 'react';
import styles from './BlogPage.module.scss';
import PropTypes from 'prop-types';

const BlogPage = ({ blogs, match }) => {
  /* to affect scroll down afer link direct */
  useEffect(() => window.scrollTo(0, 0), []);

  function createMarkup() {
    return { __html: blogs[match.params.blogId].fullText };
  }

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className='row no-gutters align-items-end'>
            <div className={'col-auto ' + styles.heading}>
              <h3>
                <span>About: </span>
                {blogs[match.params.blogId].title}
              </h3>
            </div>
            <div className={'col'}></div>
          </div>
        </div>
        <div className={'row ' + styles.imagePart}>
          <div className={'col'}>
            <img
              className={styles.image}
              src={blogs[match.params.blogId].image}
              alt={blogs[match.params.blogId].title}
            />
          </div>
          <p className={styles.postAuthor}>{blogs[match.params.blogId].author}</p>
          <p className={styles.postDate}>{blogs[match.params.blogId].date}</p>
        </div>
        <div className={styles.border}>
          <div className={'row ' + styles.fullTextRow}>
            <div className={'col'}>
              <p className={styles.fullTextP}>
                <div dangerouslySetInnerHTML={createMarkup()} />
              </p>
            </div>
          </div>
          <div className={'row'}>
            <div className={'col'}>
              <h3 className={styles.commentsHeader}>Comments:</h3>
            </div>
          </div>
          <div className={'row'}>
            <div className={'col'}>
              <p className={styles.commentsContent}>
                {blogs[match.params.blogId].comments[0].content}
              </p>
              <h4 className={styles.commentsAuthor}>
                {blogs[match.params.blogId].comments[0].author}
              </h4>
            </div>
            <div className={'col'}>
              <p className={styles.commentsContent}>
                {blogs[match.params.blogId].comments[1].content}
              </p>
              <h4 className={styles.commentsAuthor}>
                {blogs[match.params.blogId].comments[1].author}
              </h4>
            </div>
            <div className={'col'}>
              <p className={styles.commentsContent}>
                {blogs[match.params.blogId].comments[2].content}
              </p>
              <h4 className={styles.commentsAuthor}>
                {blogs[match.params.blogId].comments[2].author}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BlogPage.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      imageName: PropTypes.string,
      sampleText: PropTypes.string,
      date: PropTypes.string,
      comments: PropTypes.array,
      id: PropTypes.number,
      title: PropTypes.string,
      author: PropTypes.string,
      blogs: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          image: PropTypes.string,
          author: PropTypes.string,
          content: PropTypes.string,
        })
      ),
    })
  ),
  match: PropTypes.shape({
    params: PropTypes.shape({
      blogId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }),
};

export default BlogPage;
