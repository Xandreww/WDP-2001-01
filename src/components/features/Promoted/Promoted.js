import React from 'react';
import styles from './Promoted.module.scss';
import PropTypes from 'prop-types';

import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import PromotedProductBox from '../../common/PromotedProductBox/PromotedProductBox';
import HotDealsProductBox from '../../common/HotDealsProductBox/HotDealsProductBox';

import Swipeable from '../../common/Swipeable/Swipeable';

class Promoted extends React.Component {
  state = {
    activePage: 0,
  };

  handlePageChange(newPage) {
    this.setState({
      activePage: newPage,
    });
  }

  rightAction() {
    const newPage = this.state.activePage;

    this.setState(state => ({
      activePage: newPage + 1,
    }));
  }

  leftAction() {
    const newPage = this.state.activePage;

    this.setState(state => ({
      activePage: newPage - 1,
    }));
  }

  render() {
    const { promoted, hotDeals } = this.props;
    const { activePage, activeHotDeals } = this.state;

    const pagesNumberOnSlide = 1;
    const pagesCount = Math.ceil(hotDeals.length / pagesNumberOnSlide);

    const hotDealsPicture = hotDeals.filter(item => item.hotDeals === activeHotDeals);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className='col-4'>
              <div className={styles.promotedBar}>
                <h4 className={`col-6 ${styles.promotedBarTitle}`}>HOT DEALS</h4>
                <p className={`col-6 text-right ${styles.dots}`}>
                  <div className={'col-auto ' + styles.dots}>
                    <ul>{dots}</ul>
                  </div>
                </p>
              </div>
              <div className={styles.hotDealsList}>
                {hotDealsPicture
                  .slice(activePage * 1, (activePage + 1) * 1)
                  .map(item => (
                    <div key={item.id}>
                      <HotDealsProductBox {...item} />
                    </div>
                  ))}
              </div>
            </div>
            <div className='col-8'>
              <div className={styles.promotedContainer}>
                <div className={styles.promotedContent}>
                  <Swipeable next={this.rightAction} prev={this.leftAction}>
                    {promoted.map(promoted => (
                      <div className={styles.promotedContent} key={promoted.id}>
                        <PromotedProductBox {...promoted} />
                      </div>
                    ))}
                  </Swipeable>
                </div>
                <div className={styles.btns}>
                  <Button onClick={() => this.leftAction()} className={styles.btn}>
                    <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                  </Button>
                  <Button onClick={() => this.rightAction()} className={styles.btn}>
                    <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Promoted.propTypes = {
  promoted: PropTypes.array,
  hotDeals: PropTypes.array,
};

export default Promoted;
