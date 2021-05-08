import { createReducer } from '@reduxjs/toolkit'
import commentsActions from '../actions/commentsActions'

const commentsReducer = createReducer([], {
  [commentsActions.addCommentSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [commentsActions.getCommentsSuccess]: (_, { payload }) => payload,
  [commentsActions.deleteCommentSuccess]: (state, { payload }) =>
    state.filter(item => item.id !== payload),
})

export default commentsReducer
