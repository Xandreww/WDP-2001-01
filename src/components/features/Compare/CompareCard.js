import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';
import Card from 'react-bootstrap/Card';
import styles from './Compare.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const CompareCard = ({ name, id, removeFromCompare }) => {
  const compareHandler = (e, id) => {
    e.preventDefault();
    removeFromCompare(id);
  };

  return (
    <Card className={styles.card}>
      <div className={styles.imgContainer}>
        <Card.Img
          className={styles.cardImg}
          variant='top'
          src='data:image/png;base64,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'
        />
        <FontAwesomeIcon
          onClick={e => compareHandler(e, id)}
          className={styles.cardIcon}
          icon={faTimes}
        ></FontAwesomeIcon>
      </div>
      <Card.Body className={styles.cardBody}>
        <Card.Title>{name}</Card.Title>
        <Button variant='small'>Compare</Button>
      </Card.Body>
    </Card>
  );
};

CompareCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  removeFromCompare: PropTypes.func,
};

export default CompareCard;
