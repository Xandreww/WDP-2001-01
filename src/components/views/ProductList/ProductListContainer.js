import { connect } from 'react-redux';
import ProductList from './ProductList';
import { getAll } from '../../../redux/categoriesRedux';
import { getAllProd } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getAllProd(state),
  mode: state.other.mode,
});

export default connect(mapStateToProps)(ProductList);
