import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from '../../components/form/Form'
import Modal from '../../components/modal/Modal'
import modalActions from '../../redux/actions/modalActions'
import productsOperations from '../../redux/operations/productsOperations'
import { getModalContent } from '../../redux/selectors/modalSelector'

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
    <div>
      <h1>ProductsPage</h1>
      <button type="button" onClick={handleClick}>
        New
      </button>
      {showModal === 'newProduct' && (
        <Modal>
          <Form/>
        </Modal>
      )}
    </div>
  )
}

export default ProductsPage
