import { connect } from 'react-redux';

import Promoted from './Promoted';

const mapStateToProps = state => ({
  promoted: state.promoted,
});

export default connect(mapStateToProps)(Promoted);
