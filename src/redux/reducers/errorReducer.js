import { createReducer } from "@reduxjs/toolkit";
import commentsActions from "../actions/commentsActions";
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

  [commentsActions.addCommentError]: (_, action) => action.payload,
  [commentsActions.addCommentRequest]: () => null,

  [commentsActions.getCommentsError]: (_, action) => action.payload,
  [commentsActions.getCommentsRequest]: () => null,

  [commentsActions.deleteCommentError]: (_, action) => action.payload,
  [commentsActions.deleteCommentRequest]: () => null,

});

export default errorReducer