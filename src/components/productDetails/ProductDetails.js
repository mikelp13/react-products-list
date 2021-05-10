import React from 'react'
import { useDispatch } from 'react-redux'
import modalActions from '../../redux/actions/modalActions'
import DetailsStyled from './ProductDetailsStyled'


const ProductDetails = ({
  id,
  imageUrl,
  name,
  description,
  count,
  size: { width, height },
  weight,
}) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(modalActions.setModalContent('editProduct'))
    dispatch(modalActions.toggleModal())
  }

  return (
    <DetailsStyled>
      <img
        src={imageUrl}
        width="300px"
        alt="productPhoto"
        className="productImage"
      />
      <div className="detailsContainer">
      <p className="title">{name}</p>
      <p className="description">{description}</p>
      <p className="text">
        <span className="label">Count:</span> {count}
      </p>
      <p className="text">
        <span className="label">Size:</span> {`${width} x ${height}`}
      </p>
      <p className="text">
        <span className="label">Weigth:</span> {weight}
      </p>
      </div>
      <button
        type="button"
        data-id={id}
        onClick={handleClick}
        className="mainButton editButton"
      >
        Edit
      </button>
    </DetailsStyled>
  )
}

export default ProductDetails
