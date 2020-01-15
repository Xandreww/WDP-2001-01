import { connect } from 'react-redux';
import Compare from './Compare';
import { getAll, removeFromCompare } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getAll(state),
});

export const mapDispatchToProps = dispatch => ({
  removeFromCompare: payload => dispatch(removeFromCompare(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Compare);
