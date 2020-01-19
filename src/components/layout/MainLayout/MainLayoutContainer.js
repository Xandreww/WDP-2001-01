import { connect } from 'react-redux';
import MainLayout from './MainLayout';
import { changeMode } from '../../../redux/otherRedux';

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, props) => ({
  changeMode: mode => dispatch(changeMode(mode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
