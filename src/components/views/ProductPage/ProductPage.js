import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, Redirect } from 'react-router-dom';

import ProductPagePhoto from './ProductPagePhoto';
import StarsRating from '../../common/StarsRating/StarsRating';
import Button from '../../common/Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faShoppingBasket,
  faPlus,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';
import { faEye, faStar as faHeart } from '@fortawesome/free-regular-svg-icons';
import {
  faFacebookF,
  faGooglePlusG,
  faTwitter,
  faPinterestP,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

import styles from './ProductPage.module.scss';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';

const ProductPage = ({
  products,
  addToFav,
  removeFromFav,
  addToCompare,
  removeFromCompare,
  changeRating,
}) => {
  const { productId } = useParams();
  const product = products.find(prod => prod.id === productId);

  /* to affect scroll down afer link direct */
  useEffect(() => window.scrollTo(0, 0), []);

  if (!product) {
    return <Redirect to='/not-found' />;
  } else {
    const {
      name,
      id,
      price,
      oldPrice,
      category,
      stars,
      isFavorite,
      toCompare,
      image,
      overview,
      rated,
    } = product;

    const favHandler = (event, id) => {
      event.preventDefault();
      isFavorite ? removeFromFav(id) : addToFav(id);
    };

    const compareHandler = (event, id) => {
      event.preventDefault();
      const prodToCompare = products.filter(product => product.toCompare).length;
      if (prodToCompare <= 3) {
        toCompare ? removeFromCompare(id) : addToCompare(id);
      } else {
        alert('You can compare only four products');
      }
    };

    return (
      <div>
        <Jumbotron className={styles.root}>
          <Container>
            <Row>
              <Col lg={2} sm={12}>
                <h2 className={styles.sectionTitle}>Furniture</h2>
              </Col>
              <Col md={{ span: 3, offset: 7 }}>
                <p>{`Home > Furniture > ${category}`}</p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <Container className={styles.container}>
          <Row className={styles.descrow}>
            <Col className={styles.photo} lg={5} sm={12}>
              <ProductPagePhoto photo={image} name={name} />
            </Col>
            <Col className={styles.description} lg={7} sm={12}>
              <Row className={styles.descrow}>
                <h2 className={styles.title}>{name}</h2>
              </Row>
              <Row className={styles.descrow}>
                <StarsRating
                  stars={stars}
                  rated={rated}
                  changeRating={changeRating}
                  id={id}
                />
              </Row>
              <Dropdown.Divider className={styles.divider} />
              <Row className={styles.descrow}>
                {oldPrice && (
                  <div className={styles.price}>
                    <span className={styles.oldPrice}>$ {oldPrice}</span>
                  </div>
                )}
                <div className={styles.price}>
                  <Button noHover variant='small'>
                    $ {price}
                  </Button>
                </div>
              </Row>
              <Dropdown.Divider className={styles.divider} />
              <Row className={[styles.descrow, styles.simpleButtons].join(' ')}>
                <Button variant='small'>
                  <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO
                  CART
                </Button>
                <Button variant={'outline'}>
                  <FontAwesomeIcon icon={faEye}>Favorite</FontAwesomeIcon>
                </Button>
                <Button
                  onClick={e => favHandler(e, id)}
                  variant={isFavorite ? 'outline--checked' : 'outline'}
                >
                  <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
                </Button>
                <Button
                  onClick={e => compareHandler(e, id)}
                  variant={toCompare ? 'outline--checked' : 'outline'}
                >
                  <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
                </Button>
              </Row>
              <Row className={[styles.descrow, styles.simpleButtons].join(' ')}>
                <div className={styles.quantity}>
                  <p>Quantity: </p>
                </div>
                <Button variant='outline'>
                  <span>2</span>
                </Button>
                <Button variant='outline'>
                  <FontAwesomeIcon icon={faMinus}>Minus</FontAwesomeIcon>
                </Button>
                <Button variant='outline'>
                  <FontAwesomeIcon icon={faPlus}>Plus</FontAwesomeIcon>
                </Button>
              </Row>
              <Dropdown.Divider className={styles.divider} />
              <Row className={styles.descrow}>
                <h6>Quick overview: </h6>
              </Row>
              <Row className={styles.descrow}>
                <p> {overview} </p>
              </Row>
              <Dropdown.Divider className={styles.divider} />
              <Row className={styles.descrow}>
                <p>
                  <b>Avalabilty:</b> In Stock
                </p>
              </Row>
              <Row className={styles.descrow}>
                <p>
                  <b>Category:</b> {category}
                </p>
              </Row>
              <Dropdown.Divider className={styles.divider} />
              <Row className={[styles.descrow, styles.simpleButtons].join(' ')}>
                <Button className={styles.fb} variant='outline'>
                  <FontAwesomeIcon icon={faFacebookF}>Share</FontAwesomeIcon>
                  <span> Share</span>
                </Button>
                <Button className={styles.gplus} variant='outline'>
                  <FontAwesomeIcon icon={faGooglePlusG}>Google+</FontAwesomeIcon>
                  <span> Google+</span>
                </Button>
                <Button className={styles.tweet} variant='outline'>
                  <FontAwesomeIcon icon={faTwitter}>Tweet</FontAwesomeIcon>
                  <span> Tweet</span>
                </Button>
                <Button className={styles.pinterest} variant='outline'>
                  <FontAwesomeIcon icon={faPinterestP}>Pinterest</FontAwesomeIcon>
                  <span> Pinterest</span>
                </Button>
                <Button className={styles.linkedin} variant='outline'>
                  <FontAwesomeIcon icon={faLinkedinIn}>LinkedIn</FontAwesomeIcon>
                  <span> LinkedIn</span>
                </Button>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

ProductPage.propTypes = {
  products: PropTypes.array,
  addToFav: PropTypes.func,
  removeFromFav: PropTypes.func,
  addToCompare: PropTypes.func,
  removeFromCompare: PropTypes.func,
  changeRating: PropTypes.func,
};

export default ProductPage;
