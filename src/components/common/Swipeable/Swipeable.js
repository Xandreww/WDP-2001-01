import React from 'react';
import PropTypes from 'prop-types';

import styles from './Swipeable.module.scss';

import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

const Swipeable = ({ children }) => {
  const params = {
    spaceBetween: 30,
  };

  return (
    <div>
      <Swiper {...params}>{children}</Swiper>
    </div>
  );
};

Swipeable.propTypes = {
  children: PropTypes.node,
};

export default Swipeable;
