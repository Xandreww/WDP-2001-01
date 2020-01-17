import { connect } from 'react-redux';
import Compare from './Compare';
import { getAll, removeFromCompare } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  removeFromCompare: payload => dispatch(removeFromCompare(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Compare);
