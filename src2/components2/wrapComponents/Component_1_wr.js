import { connect } from 'react-redux';
import mapStateToProps from '../../store/mapStateToProps';
import mapDispatchToProps from '../../store/mapDispatchToProps';

import Component_1 from '../Component_1';

const COMPONENT_1_W = connect(mapStateToProps('Component_1'), mapDispatchToProps('Component_1'))(Component_1);

export default COMPONENT_1_W;