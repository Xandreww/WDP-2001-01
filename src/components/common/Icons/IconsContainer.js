import { connect } from 'react-redux';
import Icons from './Icons';
import {
  getAll,
  addToCompare,
  removeFromCompare,
  addToFav,
  removeFromFav,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Icons);
