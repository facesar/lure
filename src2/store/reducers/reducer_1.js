import ACTION_1 from '../actions/ACTION_1';
import initialState from '../initialState';

function value_1(state = initialState, action) {
    switch (action.type) {
        case ACTION_1: return action.value_1;
        default: return state;
    }
}

export default value_1;