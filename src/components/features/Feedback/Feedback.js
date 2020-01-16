import React from 'react';
import styles from './Feedback.module.scss';
// import PropTypes from 'prop-types';

const Feedback = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1>Hello, Feedback here!</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
