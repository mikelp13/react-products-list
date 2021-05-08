import { createAction } from '@reduxjs/toolkit';

const addCommentRequest = createAction('comment/addRequest');
const addCommentSuccess = createAction('comment/addSuccess');
const addCommentError = createAction('comment/addError');

const getCommentsRequest = createAction('comment/getRequest');
const getCommentsSuccess = createAction('comment/getSuccess');
const getCommentsError = createAction('comment/getError');

const deleteCommentRequest = createAction('comment/deleteRequest');
const deleteCommentSuccess = createAction('comment/deleteSuccess');
const deleteCommentError = createAction('comment/deleteError');


const commentsActions = {
  addCommentRequest,
  addCommentSuccess,
  addCommentError,

  getCommentsRequest,
  getCommentsSuccess,
  getCommentsError,

  deleteCommentRequest,
  deleteCommentSuccess,
  deleteCommentError,

};

export default commentsActions;