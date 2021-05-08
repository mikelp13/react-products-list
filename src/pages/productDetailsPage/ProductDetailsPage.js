import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/selectors/productSelectors'
import DetailsPageWrapper from './ProductDetailsPageStyled'
import CommentForm from '../../components/commentForm/CommentForm'
import commentsOperations from '../../redux/operations/commentsOperations'

const ProductDetailsPage = () => {
  const products = useSelector(getProducts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(commentsOperations.getComments())
  }, [])

  return (
    <DetailsPageWrapper>
      <div className="container">
        <p className="redirect"> For more details, you need to choose some <Link to="/">product.</Link> </p>
        <CommentForm/>
    </div>
    </DetailsPageWrapper>
  )
}

export default ProductDetailsPage
