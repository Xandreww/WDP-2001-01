import React from 'react';
import styles from './Feedback.module.scss';
import Carousel from './Carousel';
// import PropTypes from 'prop-types';

const Feedback = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1>Client feedback</h1>
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
