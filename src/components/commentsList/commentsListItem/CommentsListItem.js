import React from 'react'
import { useDispatch } from 'react-redux'
import commentsOperations from '../../../redux/operations/commentsOperations'
import CrossIcon from '../../icons/CrossIcon'
import DeleteIcon from '../../icons/DeleteIcon'

const CommentsListItem = ({ id, date, description }) => {
  const dispatch = useDispatch()

  const handleDeleteComment = e => {
    const { id } = e.currentTarget.dataset
    dispatch(commentsOperations.deleteComment(id))
  }
  return (
    <li className="commentItem">
      <p className="date">{date}</p>
      <p className="text">{description}</p>
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
