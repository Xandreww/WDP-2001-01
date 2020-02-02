import React from 'react';
import PropTypes from 'prop-types';
import styles from './BlogBox.module.scss';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const BlogBox = ({ image, imageName, sampleText, date, comments, id }) => {
  return (
    <div>
      <div className={styles.root}>
        <div className={styles.row}>
          <div className={styles.imgs}>
            <img src={image} alt={imageName} />
            <div className={styles.details}>
              <div className={styles.date}>
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  className={styles.icon}
                ></FontAwesomeIcon>{' '}
                {date}
              </div>
              <div className={styles.comments}>
                <FontAwesomeIcon
                  icon={faComments}
                  className={styles.icon}
                ></FontAwesomeIcon>{' '}
                {comments.length}
              </div>
            </div>
          </div>
          <div className={styles.postDetails}>
            <h3 className={styles.postDetailsHeader}>Products That Fight Static</h3>
            <p>{sampleText}</p>
            <div>
              <Link to={`/blog/${id}`}>
                <Button className={styles.btn}>Read More</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BlogBox.propTypes = {
  image: PropTypes.number,
  imageName: PropTypes.string,
  sampleText: PropTypes.string,
  date: PropTypes.string,
  comments: PropTypes.array,
  id: PropTypes.number,
};

export default BlogBox;
