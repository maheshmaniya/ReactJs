import incDecNum from './incDec_1';
import divMulNum from './divMul_2';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    incDecNum,
    divMulNum
});

export default rootReducer;