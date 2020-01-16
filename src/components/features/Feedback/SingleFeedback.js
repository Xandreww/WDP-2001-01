import React from 'react';
import styles from './Feedback.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const SingleFeedback = ({ text, image, name }) => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>
        {text}
      </div>
      <div className={styles.photo}>
        <img className={styles.clientPhoto} src={image} alt={`client ${name}`} />
        {name} Furniture client
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
