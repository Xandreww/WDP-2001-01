import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import {
  getAll,
  addToFav,
  removeFromFav,
  addToCompare,
  removeFromCompare,
  changeRating,
} from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  /* idFavorite */
  addToFav: payload => dispatch(addToFav(payload)),
  removeFromFav: payload => dispatch(removeFromFav(payload)),
  /* toCompare */
  addToCompare: payload => dispatch(addToCompare(payload)),
  removeFromCompare: payload => dispatch(removeFromCompare(payload)),
  /* rating */
  changeRating: (payload, stars) => dispatch(changeRating(payload, stars)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
