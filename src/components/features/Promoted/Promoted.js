import React from 'react';
import styles from './Promoted.module.scss';
import PropTypes from 'prop-types';

import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import PromotedProductBox from '../../common/PromotedProductBox/PromotedProductBox';
import HotDealsProductBox from '../../common/HotDealsProductBox/HotDealsProductBox';

class Promoted extends React.Component {
  state = {
    activeHotDealsPage: 1,
    activePromotedPage: 0,
    isUnmounted: false,
  };

  fade() {
    const fadeableElement = document.getElementById('fade');
    const fadeable = fadeableElement.classList;

    fadeable.add(styles.fadeOut);

    setTimeout(() => {
      fadeable.add(styles.fadeIn);
    }, 550);

    setTimeout(() => {
      fadeable.remove(styles.fadeOut);
      fadeable.remove(styles.fadeIn);
    }, 1000);
  }

  handlePageChange(newPageHotDeals) {
    this.fade();
    this.unmountTrue();
    setTimeout(() => {
      this.setState({
        activeHotDealsPage: newPageHotDeals,
      });
    }, 450);
    this.unmountFalse();
  }

  leftAction() {
    const newPagePromoted = this.state.activePromotedPage;
    this.fade();
    setTimeout(() => {
      this.setState(state => ({
        activePromotedPage: newPagePromoted - 1,
      }));
    }, 450);
  }

  rightAction() {
    const newPagePromoted = this.state.activePromotedPage;
    this.fade();
    setTimeout(() => {
      this.setState(state => ({
        activePromotedPage: newPagePromoted + 1,
      }));
    }, 450);
  }

  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.handlePageChange(
          this.state.activeHotDeals === this.props.hotDeals.length - 1
            ? 0
            : this.state.activeHotDeals + 1
        ),
      3000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  unmountTrue() {
    this.setState({ isUnmounted: true });
  }

  unmountFalse() {
    setTimeout(() => this.setState({ isUnmounted: false }), 1000);
  }

  render() {
    const { promoted, hotDeals } = this.props;
    const {
      activeHotDealsPage,
      activeHotDeals,
      activePromoted,
      activePromotedPage,
    } = this.state;

    const pagesNumberOnSlide = 1;
    const pagesCount = Math.ceil(hotDeals.length / pagesNumberOnSlide);

    const hotDealsPicture = hotDeals.filter(item => item.hotDeals === activeHotDeals);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => {
              this.handlePageChange(i);
              clearInterval(this.interval);
              setTimeout(
                () =>
                  (this.interval = setInterval(
                    () =>
                      this.handlePageChange(
                        this.state.activeHotDealsPage === this.props.hotDeals.length - 1
                          ? 0
                          : this.state.activeHotDealsPage + 1
                      ),
                    3000
                  )),
                3000
              );
            }}
            className={i === activeHotDealsPage ? styles.active : undefined}
          >
            page {i}
          </a>
        </li>
      );
    }

    const promotedPicture = promoted.filter(item => item.promoted === activePromoted);

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
                  .slice(activeHotDealsPage * 1, (activeHotDealsPage + 1) * 1)
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
                  {promotedPicture
                    .slice(activePromotedPage, activePromotedPage + 1)
                    .map(item => (
                      <div key={item.id}>
                        <PromotedProductBox {...item} />
                      </div>
                    ))}
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
