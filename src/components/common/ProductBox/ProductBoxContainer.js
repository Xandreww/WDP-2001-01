import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import { addToFav, removeFromFav } from '../../../redux/productsRedux';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  addToFav: payload => dispatch(addToFav(payload)),
  removeFromFav: payload => dispatch(removeFromFav(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
