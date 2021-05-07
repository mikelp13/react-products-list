import { createReducer } from "@reduxjs/toolkit";
import productsActions from "../actions/productsActions";

const errorReducer = createReducer(null, {
  [productsActions.addNewProductError]: (_, action) => action.payload,
  [productsActions.addNewProductRequest]: () => null,

  [productsActions.getProductsError]: (_, action) => action.payload,
  [productsActions.getProductsRequest]: () => null,

  [productsActions.deleteProductError]: (_, action) => action.payload,
  [productsActions.deleteProductRequest]: () => null,

  [productsActions.editProductError]: (_, action) => action.payload,
  [productsActions.editProductRequest]: () => null,
});

export default errorReducer