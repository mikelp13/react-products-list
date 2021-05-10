import React from 'react'
import { useSelector } from 'react-redux'
import { getComments } from '../../redux/selectors/commentsSelector'
import { getProductId } from '../../redux/selectors/productSelectors'
import CommentsListItem from './commentsListItem/CommentsListItem'
import CommentsWrapper from './CommentsListStyled'

const CommentsList = () => {
  const productId = useSelector(getProductId)
  const comments = useSelector(getComments).filter(
    comment => comment.productId === productId
  )

  return (
    <CommentsWrapper>
    <ul className="commentsList">
     {comments.map(comment => <CommentsListItem key={comment.id} {...comment}/>)} 
    </ul>
    </CommentsWrapper>
  )
}

export default CommentsList
