import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import productsActions from '../actions/productsActions';

const getProducts = (_, action) => {
  return action.payload;
};

const addProduct = (state, action) => {
  return [...state, action.payload];
};

const deleteProduct = (state, action) =>
  state.filter(item => item.id !== action.payload);

const onEditProduct = (state, action) =>
  state.map(item =>
    item.id === action.payload.id ? { ...action.payload } : item,
  );

const productsReducer = createReducer([], {
  [productsActions.addNewProductSuccess]: addProduct,
  [productsActions.getProductsSuccess]: getProducts,
  [productsActions.deleteProductSuccess]: deleteProduct,
  [productsActions.editProductSuccess]: onEditProduct,
});

const productByIdReducer = createReducer('', {
  [productsActions.getIdValue]: (_, action) => action.payload,
});



const mainReducer= combineReducers({
  items: productsReducer,
  idValue: productByIdReducer,
});
export default mainReducer