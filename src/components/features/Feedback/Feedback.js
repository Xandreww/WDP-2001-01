import React from 'react';
import PropTypes from 'prop-types';

import styles from './Feedback.module.scss';
import SingleFeedback from '../../common/SingleFeedback/SingleFeedback';

import Swipeable from '../../common/Swipeable/Swipeable';

class Feedback extends React.Component {
  state = {
    activePage: 0,
    splitPage: true,
  };

  handlePageChange(newPage) {
    this.setState({
      activePage: newPage,
      splitPage: false,
    });
  }

  rightAction() {
    const newPage = this.state.activePage;

    if (this.state.splitPage) {
      this.setState({ activePage: newPage + 1 });
    } else {
      this.setState({ splitPage: true });
    }
  }

  leftAction() {
    const newPage = this.state.activePage;

    if (this.state.splitPage) {
      this.setState({ activePage: newPage - 1 });
    } else {
      this.setState({ splitPage: true });
    }
  }

  render() {
    const { feedbacks } = this.props;
    const { activePage } = this.state;

    const pagesNumberOnSlide = 1;
    const pagesCount = Math.ceil(feedbacks.length / pagesNumberOnSlide);

    const dots = [];
    const pages = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={`li-${i}`}>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage ? styles.active : null}
          >
            page {i}
          </a>
        </li>
      );

      pages.push(
        <div className={'row' + ' ' + styles.swipeContainer} key={`div-${i}`}>
          <SingleFeedback {...feedbacks[i]} />
        </div>
      );
    }

    const renderPages = () => {
      return pages;
    };

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>Client Feedback</h3>
              </div>
              <div className={'col ' + styles.menu}></div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <Swipeable
            nextPage={() => this.rightAction()}
            prevPage={() => this.leftAction()}
            currentPage={this.state.activePage}
          >
            {renderPages()}
          </Swipeable>
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  feedbacks: PropTypes.array,
};

Feedback.defaultProps = {
  feedbacks: [],
};

export default Feedback;
