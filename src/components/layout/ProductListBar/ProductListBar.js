import React from 'react';
import styles from './ProductListBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faList } from '@fortawesome/free-solid-svg-icons';

const ProductListBar = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className={'row ' + styles.row}>
        <div className={'col-4'}>
          <h2 className={styles.header}>Furniture</h2>
        </div>
        <div className={'col-4 ' + styles.colTwo}>
          <p>Sort By</p>
          <div className={styles.dropdown}>
            <button>Price: Lowest first</button>
            <ul>
              <li>
                <a href='#'>Price: Highest first</a>
              </li>
              <li>
                <a href='#'>Rating: Highest first</a>
              </li>
              <li>
                <a href='#'>Rating: Lowest first</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={'col-2 ' + styles.colThree}>
          <p>Show</p>
          <div className={styles.dropdown}>
            <button>12</button>
            <ul>
              <li>
                <a href='#'>24</a>
              </li>
              <li>
                <a href='#'>48</a>
              </li>
              <li>
                <a href='#'>64</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={'col-2 ' + styles.colFour}>
          <div className={styles.icons}>
            <FontAwesomeIcon className={styles.icon} icon={faThLarge}></FontAwesomeIcon>
            <FontAwesomeIcon className={styles.icon} icon={faList}></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProductListBar;
