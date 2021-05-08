import { combineReducers } from 'redux'
import modalReducer from './modalReducer'
import modalContentReducer from './modalContentReducer'
import errorReducer from './errorReducer'
import loadingReducer from './loadingReducer'
import commentsReducer from './commentsReducer'
import productsReducer from './productsReducer'


const rootReducer = combineReducers({
  products: productsReducer,
  comments: commentsReducer,
  modal: modalReducer,
  modalContent: modalContentReducer,
  loading:loadingReducer,
  errors: errorReducer,
})
export default rootReducer
