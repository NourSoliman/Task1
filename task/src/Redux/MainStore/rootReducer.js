import {combineReducers} from 'redux';
import {isCheckedReducer} from './PluginsButton/Reducer'
const rootReducer = combineReducers({
    checked:isCheckedReducer
})
export default rootReducer