import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import productsActions from '../actions/productsActions'

const productsReducer = createReducer([], {
  [productsActions.addNewProductSuccess]: (state, { payload }) => [...state, payload],
  [productsActions.getProductsSuccess]: (_, { payload }) => payload,
  [productsActions.deleteProductSuccess]: (state, { payload }) =>
    state.filter(item => item.id !== payload),

  [productsActions.editProductSuccess]: (state, { payload }) =>
    state.map(item => (item.id === payload.id ? { ...payload } : item)),
})

const productByIdReducer = createReducer('', {
  [productsActions.getProductId]: (_, { payload }) => payload,
})

const mainReducer = combineReducers({
  items: productsReducer,
  currentProductId: productByIdReducer,
})
export default mainReducer
