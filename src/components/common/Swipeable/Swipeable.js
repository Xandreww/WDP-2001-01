import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Swipeable.module.scss';

import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

const Swipeable = ({ children, nextPage, prevPage, currentPage }) => {
  const [swiper, updateSwiper] = useState(null);

  const params = {
    spaceBetween: 30,
    on: {
      slideNextTransitionEnd: nextPage,
      slidePrevTransitionEnd: prevPage,
    },
  };

  const goTo = pageNumber => {
    if (swiper !== null) {
      swiper.slideTo(pageNumber);
    }
  };

  goTo(currentPage);

  return (
    <div>
      <Swiper {...params} getSwiper={updateSwiper}>
        {children}
      </Swiper>
    </div>
  );
};

Swipeable.propTypes = {
  children: PropTypes.node,
  nextPage: PropTypes.func,
  prevPage: PropTypes.func,
  currentPage: PropTypes.number,
};

export default Swipeable;
