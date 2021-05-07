import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from '../../components/form/Form'
import Modal from '../../components/modal/Modal'
import ProductsList from '../../components/productsList/ProductList'
import modalActions from '../../redux/actions/modalActions'
import productsOperations from '../../redux/operations/productsOperations'
import { getModalContent } from '../../redux/selectors/modalSelector'
import ProductsPageWrapper from './ProductsPageStyled'

const ProductsPage = () => {
  const showModal = useSelector(getModalContent)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(productsOperations.getProducts())
    // eslint-disable-next-line
  }, [])

  const handleClick = () => {
    dispatch(modalActions.setModalContent('newProduct'))
    dispatch(modalActions.toggleModal())
  }

  return (
    <ProductsPageWrapper>
      <div className="container">
        <ProductsList />
        <button type="button" onClick={handleClick} className="mainButton">
          New
        </button>
      </div>
      {showModal === 'newProduct' && (
        <Modal>
          <Form />
        </Modal>
      )}
    </ProductsPageWrapper>
  )
}

export default ProductsPage
