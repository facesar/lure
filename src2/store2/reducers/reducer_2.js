import ACTION_2 from '../actions/ACTION_2';
import initialState from '../initialState';

function value_2(state = initialState, action) {
    switch (action.type) {
        case ACTION_2: return action.value_2;
        default: return state;
    }
}

export default value_2;