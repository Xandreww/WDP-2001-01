import { connect } from 'react-redux';

import ProductListBar from './ProductListBar';
import changeSortMethod from '../../../redux/productListRedux';

const mapStateToProps = state => ({
  sortBy: state.sortBy,
});

const mapDispatchToProps = dispatch => {
  return {
    changeSortMethod: name => dispatch(changeSortMethod(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListBar);
