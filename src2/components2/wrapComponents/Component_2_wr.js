import { connect } from "react-redux";
import mapStateToProps from '../../store/mapStateToProps';
import mapDispatchToProps from '../../store/mapDispatchToProps';

import Component_2 from "../Component_2";

const COMPONENT_2_W = connect(mapStateToProps('Component_2'), mapDispatchToProps('Component_2'))(Component_2);

export default COMPONENT_2_W;