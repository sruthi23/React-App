import { combineReducers } from 'redux'
import questAns from './quest.js'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    questAns: questAns,
    form: formReducer
})
