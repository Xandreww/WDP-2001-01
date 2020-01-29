import { connect } from 'react-redux';

import ProductListBar from './ProductListBar';
import changeSortMethod from '../../../redux/productListRedux';

const mapStateToProps = state => ({
  sortBy: state.productList.sortBy,
});

const mapDispatchToProps = dispatch => ({
  changeSortMethod: payload => dispatch(changeSortMethod(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductListBar);
