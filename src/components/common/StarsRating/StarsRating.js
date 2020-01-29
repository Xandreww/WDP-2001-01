import React from 'react';
import PropTypes from 'prop-types';

import styles from './StarsRating.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const StarsRating = ({ stars, id, changeRating, rated }) => {
  const ratingHandler = (event, id, i) => {
    event.preventDefault();
    changeRating(id, i);
  };

  return (
    <div className={rated ? styles.starsRated : styles.stars}>
      {[1, 2, 3, 4, 5].map(i => (
        <a key={'starsRatingList' + i} href='#' onClick={e => ratingHandler(e, id, i)}>
          {i <= stars ? (
            <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
          )}
        </a>
      ))}
    </div>
  );
};

StarsRating.propTypes = {
  stars: PropTypes.number.isRequired,
  id: PropTypes.string,
  changeRating: PropTypes.func,
  rated: PropTypes.bool,
};

StarsRating.defaultProps = {
  stars: 2,
};

export default StarsRating;
