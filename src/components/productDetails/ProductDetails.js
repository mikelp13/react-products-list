import React from 'react'
import { useDispatch } from 'react-redux'
import modalActions from '../../redux/actions/modalActions'


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
    <div>
      <img
        src={imageUrl}
        width="100px"
        alt="productPhoto"
        className="productImage"
      />
      <p className="title">{name}</p>
      <p className="description">{description}</p>
      <p className="text">
        <span className="label">Count:</span> {count}
      </p>
      <p className="text">
        <span className="label">Size:</span>
        {`${width} x ${height}`}
      </p>
      <p className="text">
        <span className="label">Weigth:</span> {weight}
      </p>
      <button
        type="button"
        data-id={id}
        onClick={handleClick}
        className="mainButton editButton"
      >
        Edit
      </button>
    </div>
  )
}

export default ProductDetails
