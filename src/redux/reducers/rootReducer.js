import { combineReducers } from 'redux'
import modalReducer from './modalReducer'
import modalContentReducer from './modalContentReducer'
import errorReducer from './errorReducer'
import loadingReducer from './loadingReducer'
import mainReducer from './productsReducer'


const rootReducer = combineReducers({
  products: mainReducer,
  modal: modalReducer,
  modalContent: modalContentReducer,
  loading:loadingReducer,
  errors: errorReducer,
})
export default rootReducer
