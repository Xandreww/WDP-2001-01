import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import styles from './PromotedProductBox.module.scss';

const PromotedProductBox = ({
  image,
  imageName,
  softTitle,
  strongTitle,
  description,
}) => {
  return (
    <div className={styles.root}>
      <img src={image} alt='imageName' />
      <div className={styles.text}>
        <h3 className={styles.title}>
          {softTitle}
          <strong> {strongTitle}</strong>
        </h3>
        <p className={styles.description}>{description}</p>
      </div>
      <Button className={styles.mainBtn}>Shop now</Button>
    </div>
  );
};

PromotedProductBox.propTypes = {
  image: PropTypes.any,
  imageName: PropTypes.string,
  softTitle: PropTypes.string,
  strongTitle: PropTypes.string,
  description: PropTypes.string,
};

export default PromotedProductBox;
