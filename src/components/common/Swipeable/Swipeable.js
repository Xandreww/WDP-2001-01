import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './Swipeable.module.scss';

import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

const Swipeable = ({ children, nextPage, prevPage, currentPage }) => {
  const [swiper, setSwiper] = useState(null);

  const params = {
    spaceBetween: 30,
    on: {
      slideNextTransitionEnd: nextPage,
      slidePrevTransitionEnd: prevPage,
    },
  };

  const goTo = pageNumber => {
    swiper !== null && swiper.slideTo(pageNumber);
  };

  goTo(currentPage);
  /*
  useEffect(() => {
    goTo(currentPage);
  }, [currentPage]);
  */
  console.log('currentPage:', currentPage);

  return (
    <div>
      <Swiper {...params} getSwiper={setSwiper}>
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
