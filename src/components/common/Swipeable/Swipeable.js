import React from 'react';
import PropTypes from 'prop-types';

import styles from './Swipeable.module.scss';

import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

const Swipeable = ({ children, nextPage, prevPage }) => {
  const params = {
    spaceBetween: 30,
    on: {
      slideNextTransitionEnd: nextPage,
      slidePrevTransitionEnd: prevPage,
    },
  };

  return (
    <div>
      <Swiper {...params}>{children}</Swiper>
    </div>
  );
};

Swipeable.propTypes = {
  children: PropTypes.node,
  nextPage: PropTypes.func,
  prevPage: PropTypes.func,
};

export default Swipeable;
