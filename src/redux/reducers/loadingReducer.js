import { createReducer } from "@reduxjs/toolkit";
import commentsActions from "../actions/commentsActions";
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

  [commentsActions.getCommentsRequest]: () => true,
  [commentsActions.getCommentsSuccess]: () => false,
  [commentsActions.getCommentsError]: () => false,

  [commentsActions.addCommentRequest]: () => true,
  [commentsActions.addCommentSuccess]: () => false,
  [commentsActions.addCommentError]: () => false,

  [commentsActions.deleteCommentRequest]: () => true,
  [commentsActions.deleteCommentSuccess]: () => false,
  [commentsActions.deleteCommentError]: () => false,

});
export default loadingReducer