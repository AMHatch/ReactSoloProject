
import {combineReducers} from 'redux'
import sampleReducer from './sampleReducer';

const rootReducer =combineReducers({
    templateReducer:sampleReducer
})

export default rootReducer;