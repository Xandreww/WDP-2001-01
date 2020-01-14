import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import { addToFav } from '../../../redux/productsRedux';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  addToFav: payload => dispatch(addToFav(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
