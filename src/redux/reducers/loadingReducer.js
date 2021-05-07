import { createReducer } from "@reduxjs/toolkit";
import productsActions from "../actions/productsActions";

const loadingReducer = createReducer(false, {
  [productsActions.getProductsRequest]: () => true,
  [productsActions.getProductsSuccess]: () => false,
  [productsActions.getProductsError]: () => false,

  [productsActions.addNewProductRequest]: () => true,
  [productsActions.addNewProductSuccess]: () => false,
  [productsActions.addNewProductError]: () => false,

  [productsActions.deleteProductRequest]: () => true,
  [productsActions.deleteProductSuccess]: () => false,
  [productsActions.deleteProductError]: () => false,

  [productsActions.editProductRequest]: () => true,
  [productsActions.editProductSuccess]: () => false,
  [productsActions.editProductError]: () => false,
});
export default loadingReducer