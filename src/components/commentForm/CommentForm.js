import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import commentsOperations from '../../redux/operations/commentsOperations'
import { getProductId } from '../../redux/selectors/productSelectors'
import CommentFormContainer from './CommentFormStyled'

const CommentForm = () => {
  const [comment, setComment] = useState('')
  const productId = useSelector(getProductId)
  const dispatch = useDispatch()

  const handelChange = e => {
    setComment(e.target.value)
  }

  const handelSubmit = (e) => {
    e.preventDefault()

    const newComment = {
      productId,
      description: comment,
      date: new Date().toLocaleString(),
    }
    dispatch(commentsOperations.addComment(newComment))
    setComment('')
  }

  return (
    <CommentFormContainer>
      <form onSubmit={handelSubmit}>
        <label className="formFild">
          <span className="formText">Leave a comment</span>
          <textarea
            className="formTextArea"
            placeholder="Add a new comment ..."
            type="text"
            rows="5"
            name="comment"
            value={comment}
            onChange={handelChange}
          />
        </label>
        <button className="mainButton" type="submit">
          Add
        </button>
      </form>
    </CommentFormContainer>
  )
}

export default CommentForm
