import { bindActionCreators } from "redux";
import action_1 from './actionsCreators/action_1';


function mapDispatchToProps(component) {
    switch (component) {
        case 'Component_1': {
            return function (dispatch) {
                return {
                    change_value_1: bindActionCreators(action_1, dispatch)
                };
            };
        }
        default: return undefined;
    }
}

export default mapDispatchToProps;
