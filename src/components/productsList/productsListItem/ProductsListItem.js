import React from 'react'
import DeleteIcon from '../../icons/DeleteIcon'

const ContactListItem = ({ product, onDeleteProduct }) => {
  const { id, name, imageUrl, count, description } = product
  return (
    <li>
      <img src={imageUrl} width="100px" alt="productPhoto" />
      <div className="itemContainer">
        <p className="title">
          <span className="label">Title:</span> {name}
        </p>
        <div className="descriptionContainer">
          <span className="label">Description:</span>
          <p className="description">{description}</p>
        </div>
        <p className="text">
          <span className="label">Count:</span> {count}
        </p>
      </div>
      <button type="button" data-id={id} className="mainButton detailsButton">
        Details
      </button>
      <button
        type="button"
        data-id={id}
        onClick={onDeleteProduct}
        className="deleteButton"
      >
        <DeleteIcon className="deleteIcon" />
      </button>
    </li>
  )
}

export default ContactListItem
