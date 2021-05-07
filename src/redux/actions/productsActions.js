import { createAction } from '@reduxjs/toolkit';

const addNewProductRequest = createAction('product/addRequest');
const addNewProductSuccess = createAction('product/addSuccess');
const addNewProductError = createAction('product/addError');

const getProductsRequest = createAction('products/getRequest');
const getProductsSuccess = createAction('products/getSuccess');
const getProductsError = createAction('products/getError');

const deleteProductRequest = createAction('product/deleteRequest');
const deleteProductSuccess = createAction('product/deleteSuccess');
const deleteProductError = createAction('product/deleteError');

const editProductRequest = createAction('product/editRequest');
const editProductSuccess = createAction('product/editSuccess');
const editProductError = createAction('product/editError');

const getIdValue = createAction('products/getIdValue');

const productsActions = {
  addNewProductRequest,
  addNewProductSuccess,
  addNewProductError,

  getProductsRequest,
  getProductsSuccess,
  getProductsError,

  deleteProductRequest,
  deleteProductSuccess,
  deleteProductError,

  editProductRequest,
  editProductSuccess,
  editProductError,

  getIdValue,
};

export default productsActions;