import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';
import Promoted from '../../features/Promoted/PromotedContainer';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import SaleContainer from '../../features/Sale/SaleContainer';
import Feedback from '../../features/Feedback/FeedbackContainer';
import Brands from '../../features/Brands/BrandsContainer';
import Gallery from '../../features/Gallery/GalleryContainer';
import LatestBlog from '../../features/LatestBlog/LatestBlogContainer.js';
import SinglePost from '../../features/SinglePost/SinglePostContainer';

const Homepage = () => (
  <div className={styles.root}>
    <Promoted />
    <FeatureBoxes />
    <SaleContainer />
    <NewFurniture />
    <Gallery />
    <LatestBlog />
    <Brands />
    <Feedback />
    <SinglePost />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
