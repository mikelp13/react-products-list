import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import commentsOperations from '../../redux/operations/commentsOperations'
import CommentFormContainer from './CommentFormStyled'

const CommentForm = () => {
  const [comment, setComment] = useState('')

  const dispatch = useDispatch()

  const handelChange = e => {
    setComment(e.target.value)
  }
  const newComment = {
    productId: '-M_BR-J7KWaNSnI81e6A',
    description: 'some text here',
    date: '16:30 23.08.2021',
  }
  const handelSubmit = (e) => {
    e.preventDefault()
    dispatch(commentsOperations.addComment(newComment))

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
