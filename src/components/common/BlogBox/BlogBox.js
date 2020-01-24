import React from 'react';
import PropTypes from 'prop-types';
import styles from './BlogBox.module.scss';
import Button from '../Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const BlogBox = ({ image, imageName, text, date, comments }) => {
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
                {comments}
              </div>
            </div>
          </div>
          <div className={styles.postDetails}>
            <h3 className={styles.postDetailsHeader}>Products That Fight Static</h3>
            <p>{text}</p>
            <div>
              <Button className={styles.btn}>Read More</Button>
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
  text: PropTypes.string,
  date: PropTypes.string,
  comments: PropTypes.string,
};

export default BlogBox;
