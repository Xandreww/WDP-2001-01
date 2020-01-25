import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

import styles from './Swipeable.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Swipeable = ({ children, nextPage, prevPage, currentPage }) => {
  const [swiper, setSwiper] = useState(null);

  const params = {
    spaceBetween: 30,
    on: {
      slideNextTransitionEnd: nextPage,
      slidePrevTransitionEnd: prevPage,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    threshold: 10,
    // eslint-disable-next-line react/display-name
    renderPrevButton: () => {
      return (
        <div className={'swiper-button-prev' + ' ' + styles.button}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
      );
    },
    // eslint-disable-next-line react/display-name
    renderNextButton: () => {
      return (
        <div className={'swiper-button-next' + ' ' + styles.button}>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      );
    },
  };

  if (swiper !== null) {
    if (currentPage < 0) {
      currentPage = 0;
    } else if (currentPage > swiper.slides.length - 1) {
      currentPage = swiper.slides.length - 1;
    }
  }

  useEffect(() => {
    swiper !== null && swiper.slideTo(currentPage);
  }, [currentPage, swiper]);

  return (
    <div id='fade'>
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
