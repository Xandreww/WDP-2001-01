import { connect } from 'react-redux';
import Gallery from './Gallery';
import { getAll, changeRating } from '../../../redux/productsRedux';
import { getAllSubcategories } from '../../../redux/categoriesRedux.js';

const mapStateToProps = state => ({
  products: getAll(state),
  subcategories: getAllSubcategories(state),
});

const mapDispatchToProps = dispatch => ({
  /* rating */
  changeRating: (payload, stars) => dispatch(changeRating(payload, stars)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
