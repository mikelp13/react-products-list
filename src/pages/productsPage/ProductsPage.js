import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from '../../components/form/Form'
import Modal from '../../components/modal/Modal'
import ProductsList from '../../components/productsList/ProductList'
import SortSelect from '../../components/sortSelect/SortSelect'
import modalActions from '../../redux/actions/modalActions'
import productsOperations from '../../redux/operations/productsOperations'
import { getModalContent } from '../../redux/selectors/modalSelector'
import { getProducts } from '../../redux/selectors/productSelectors'
import ProductsPageWrapper from './ProductsPageStyled'

const ProductsPage = () => {
  const showModal = useSelector(getModalContent)
  const products = useSelector(getProducts)
  const [sort, setSort] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(productsOperations.getProducts())
    // eslint-disable-next-line
  }, [])

  const handleSort = e => {
    setSort(e.target.value)
  }
  const sortedProducts = products.slice().sort((a, b) => {
    if (sort === 'name') return a.name.localeCompare(b.name)
    if (sort === 'count') return a.count - b.count
    return 0
  })


  const handleClick = () => {
    dispatch(modalActions.setModalContent('newProduct'))
    dispatch(modalActions.toggleModal())
  }

  return (
    <ProductsPageWrapper>
      <div className="container">
        <SortSelect handleSort={handleSort}/>
        <ProductsList products={sort ? sortedProducts : products}/>
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
