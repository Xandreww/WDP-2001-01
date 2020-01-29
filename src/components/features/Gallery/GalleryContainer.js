import { connect } from 'react-redux';
import Gallery from './Gallery';
import { getAll, changeRating } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  /* rating */
  changeRating: (payload, stars) => dispatch(changeRating(payload, stars)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
