import React from 'react';
import styles from './Icons.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faExchangeAlt,
  faEye,
  faShoppingBag,
  faCaretLeft,
} from '@fortawesome/free-solid-svg-icons';

const Icons = () => (
  <ul className={styles.icons}>
    <a href='#'>
      <li>
        <FontAwesomeIcon
          className={styles.icon}
          icon={faHeart}
          fixedWidth
          border
        ></FontAwesomeIcon>
      </li>
      <span>
        <FontAwesomeIcon
          className={styles.caretLeft}
          icon={faCaretLeft}
        ></FontAwesomeIcon>
        Add to favorities
      </span>
    </a>
    <a href='#'>
      <li>
        <FontAwesomeIcon
          className={styles.icon}
          icon={faExchangeAlt}
          fixedWidth
          border
        ></FontAwesomeIcon>
      </li>
      <span>
        <FontAwesomeIcon
          className={styles.caretLeft}
          icon={faCaretLeft}
        ></FontAwesomeIcon>
        Add to compare
      </span>
    </a>
    <a href='#'>
      <li>
        <FontAwesomeIcon
          className={styles.icon}
          icon={faEye}
          fixedWidth
          border
        ></FontAwesomeIcon>
      </li>
      <span>
        <FontAwesomeIcon
          className={styles.caretLeft}
          icon={faCaretLeft}
        ></FontAwesomeIcon>
        View details
      </span>
    </a>
    <a href='#' className={styles.linkActive}>
      <li>
        <FontAwesomeIcon
          className={styles.icon}
          icon={faShoppingBag}
          fixedWidth
          border
        ></FontAwesomeIcon>
      </li>
      <span>
        <FontAwesomeIcon
          className={styles.caretLeft}
          icon={faCaretLeft}
        ></FontAwesomeIcon>
        Add to cart
      </span>
    </a>
  </ul>
);

export default Icons;
