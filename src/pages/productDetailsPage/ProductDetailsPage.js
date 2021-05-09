import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  getProductId,
  getProducts,
} from '../../redux/selectors/productSelectors'
import DetailsPageWrapper from './ProductDetailsPageStyled'
import CommentForm from '../../components/commentForm/CommentForm'
import commentsOperations from '../../redux/operations/commentsOperations'
import ProductDetails from '../../components/productDetails/ProductDetails'
import { getModalContent } from '../../redux/selectors/modalSelector'
import Modal from '../../components/modal/Modal'
import Form from '../../components/form/Form'

const ProductDetailsPage = () => {
  const products = useSelector(getProducts)
  const productId = useSelector(getProductId)
  const showModal = useSelector(getModalContent)
  const dispatch = useDispatch()

  const product = products.find(item => item.id === productId)

  useEffect(() => {
    dispatch(commentsOperations.getComments())
    //eslint-disable-next-line
  }, [])

  return (
    <DetailsPageWrapper>
      <div className="container">
        {!productId && (
          <p className="redirect">
            For more details, you need to choose some <Link to="/">product.</Link>
          </p>
        )}
        {productId && <ProductDetails {...product} />}
        <CommentForm />
      </div>
      {showModal === 'editProduct' && (
        <Modal>
          <Form product={product}/>
        </Modal>
      )}
    </DetailsPageWrapper>
  )
}

export default ProductDetailsPage
