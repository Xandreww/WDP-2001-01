import React from 'react';
import styles from './SingleFeedback.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const SingleFeedback = ({ text, image, name }) => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faQuoteRight}
          ></FontAwesomeIcon>
        </div>
        <div>{text}</div>
      </div>
      <div className={styles.photo}>
        <img className={styles.clientPhoto} src={image} alt={`client ${name}`} />
        <div className={styles.photoDescription}>
          <p className={styles.clientName}>{name}</p>
          <p>Furniture client</p>
        </div>
      </div>
    </div>
  );
};

SingleFeedback.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
};

export default SingleFeedback;
