import React from 'react';

import styles from './Timer.module.scss';

const Timer = () => {
  const days = 25;
  const hours = 10;
  const minutes = 45;
  const seconds = 30;
  return (
    <div className={styles.root}>
      <div className={styles.timerItem}>
        <span className={styles.time}>{days}</span>
        <span className={styles.unit}>DAYS</span>
      </div>
      <div className={styles.timerItem}>
        <span className={styles.time}>{hours}</span>
        <span className={styles.unit}>HRS</span>
      </div>
      <div className={styles.timerItem}>
        <span className={styles.time}>{minutes}</span>
        <span className={styles.unit}>MINS</span>
      </div>
      <div className={styles.timerItem}>
        <span className={styles.time}>{seconds}</span>
        <span className={styles.unit}>SECS</span>
      </div>
    </div>
  );
};

export default Timer;
