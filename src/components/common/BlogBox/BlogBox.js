import React from 'react';
import PropTypes from 'prop-types';
import styles from './BlogBox.module.scss';
import Button from '../Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const BlogBox = ({ blogBox }) => {
  return (
    <div>
      <div className={styles.root}>
        <a href='#' className={styles.row}>
          <div className={styles.imgs}>
            <img src={blogBox.leftBox.image} alt={blogBox.leftBox.imageName} />
            <div className={styles.details}>
              <div className={styles.date}>
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  className={styles.icon}
                ></FontAwesomeIcon>{' '}
                15 Jan 2016
              </div>
              <div className={styles.comments}>
                <FontAwesomeIcon
                  icon={faComments}
                  className={styles.icon}
                ></FontAwesomeIcon>{' '}
                4 Comments
              </div>
            </div>
          </div>
          <div className={styles.postDetails}>
            <h3 className={styles.postDetailsHeader}>Products That Fight Static</h3>
            <p>{blogBox.leftBox.text}</p>
            <div>
              <Button className={styles.btn}>Read More</Button>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

BlogBox.propTypes = {
  blogBox: PropTypes.object,
};

export default BlogBox;
