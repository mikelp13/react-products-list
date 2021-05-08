import axios from 'axios'
import commentsActions from '../actions/commentsActions'

axios.defaults.baseURL = "https://product-list-f8fe2-default-rtdb.firebaseio.com";

const addComment = comment => async dispatch => {
  dispatch(commentsActions.addCommentRequest())

  try {
    const { data } = await axios.post(`/comments.json`, comment)
    dispatch(commentsActions.addCommentSuccess({ ...comment, id: data.name }))
  } catch (error) {
    dispatch(commentsActions.addCommentError(error))
  }
}

const getComments = () => async dispatch => {
  dispatch(commentsActions.getCommentsRequest());

  try {
    const { data } = await axios.get('/comments.json');
    if (data) {
      const comments = Object.keys(data).map(key => ({
        ...data[key],
        id: key,
      }));
      dispatch(commentsActions.getCommentsSuccess(comments));
    }
  } catch (error) {
    dispatch(commentsActions.getCommentsError(error));
  }
};

const deleteComment = (id) => async dispatch => {
  dispatch(commentsActions.deleteCommentRequest())

  try {
    await axios.delete(`/comments/${id}.json`)
    dispatch(commentsActions.deleteCommentSuccess(id))
  } catch (error) {
    dispatch(commentsActions.deleteCommentError(error))
  }
}

const commentsOperations = {
  addComment,
  getComments,
  deleteComment,
}
export default commentsOperations
