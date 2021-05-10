import React from 'react'
import { useDispatch } from 'react-redux'
import commentsOperations from '../../../redux/operations/commentsOperations'
import CrossIcon from '../../icons/CrossIcon'

const CommentsListItem = ({ id, date, description }) => {
  const dispatch = useDispatch()

  const handleDeleteComment = e => {
    const { id } = e.currentTarget.dataset
    dispatch(commentsOperations.deleteComment(id))
  }
  return (
    <li className="commentItem">
      <div className="commentInfo">
      <p className="date">{date}</p>
      <p className="text">{description}</p>
      </div>
     
      <button
        type="button"
        data-id={id}
        onClick={handleDeleteComment}
        className="deleteButton"
      >
        <CrossIcon className="deleteIcon" />
      </button>
    </li>
  )
}

export default CommentsListItem
