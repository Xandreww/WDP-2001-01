import { connect } from 'react-redux';
import ProductList from './ProductList';
import { getAll } from '../../../redux/categoriesRedux';

const mapStateToProps = state => ({
  categories: getAll(state),
});

export default connect(mapStateToProps)(ProductList);
