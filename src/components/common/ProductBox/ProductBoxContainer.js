import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import { addToFav, removeFromFav } from '../../../redux/productsRedux';

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  addToFav,
  removeFromFav,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
