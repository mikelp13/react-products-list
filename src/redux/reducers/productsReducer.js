import { createReducer } from '@reduxjs/toolkit';
import productsActions from '../actions/productsActions';

const deleteProduct = (state, action) =>
  state.filter(item => item.id !== action.payload);

const onEditProduct = (state, action) =>
  state.map(item =>
    item.id === action.payload.id ? { ...action.payload } : item,
  );

const productsReducer = createReducer([], {
  [productsActions.addNewProductSuccess]: (state, {payload}) => [...state, payload],
  [productsActions.getProductsSuccess]: (_, {payload}) => payload,
  [productsActions.deleteProductSuccess]: deleteProduct,
  [productsActions.editProductSuccess]: onEditProduct,
 
});

export default productsReducer