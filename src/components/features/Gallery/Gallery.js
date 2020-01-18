import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Gallery.module.scss';
// import Button from '../../common/Button/Button';

class Gallery extends Component {
  render() {
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            {/* col 1 starts here */}
            <div className={'col'}>
              <div className={styles.panelBar}>
                <div className='row no-gutters align-items-end'>
                  <div className={'col-auto ' + styles.heading}>
                    <h3>Furniture gallery</h3>
                  </div>
                  <div className={'col'}></div>
                </div>
              </div>
            </div>
            <div className={'col'}>
              <h1>Column 2</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
