import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import modalActions from '../../redux/actions/modalActions'
import productsOperations from '../../redux/operations/productsOperations'
import FormStyled from './FormStyled'

const initialState = {
  name: 'iphone',
  imageUrl: 'https://i.pinimg.com/originals/8d/fc/a2/8dfca2d45fda9af450d8b4d04a4ea117.jpg',
  count: 2,
  width: 234,
  height: 69,
  weight: '120g',
  description: 'Apple iPhone 12 Pro, 128 GB/256 GB Grey, Gold, Blue Brand New',
}

const Form = () => {
  const [state, setState] = useState({ ...initialState })
  const dispatch = useDispatch()

  const handelChange = e => {
    const { name, value } = e.target
    setState(prevState => ({ ...prevState, [name]: value }))
  }

  const handelSubmit = e => {
    e.preventDefault()
    const { imageUrl, name, count, width, height, weight } = state
    const newProduct = {
      imageUrl,
      name,
      count: Number(count),
      size: {
        width: Number(width),
        height: Number(height),
      },
      weight,
      comments: [],
    }

    dispatch(productsOperations.addNewProduct(newProduct))
  }

  const handleClick = () => {
    dispatch(modalActions.setModalContent(''))
    dispatch(modalActions.toggleModal())
  }

  return (
    <FormStyled onSubmit={handelSubmit}>
      <label className="formFild">
        <span className="formText">Product name: </span>
        <input
          className="formInput"
          placeholder="Enter name..."
          type="text"
          name="name"
          value={state.name}
          onChange={handelChange}
        />
      </label>
      <label className="formFild">
        <span className="formText">Product image: </span>
        <input
          className="formInput"
          placeholder="Image URL..."
          type="text"
          name="imageUrl"
          value={state.imageUrl}
          onChange={handelChange}
        />
      </label>
      <label className="formFild">
        <span className="formText">Product count: </span>
        <input
          className="formInput"
          placeholder="..."
          type="number"
          name="count"
          value={state.count}
          onChange={handelChange}
        />
      </label>
      <label className="formFild">
        <span className="formText">Width: </span>
        <input
          className="formInput"
          placeholder="..."
          type="number"
          name="width"
          value={state.width}
          onChange={handelChange}
        />
      </label>
      <label className="formFild">
        <span className="formText"> Height: </span>
        <input
          className="formInput"
          placeholder="..."
          type="number"
          name="height"
          value={state.height}
          onChange={handelChange}
        />
      </label>
      <label className="formFild">
        <span className="formText"> Weight: </span>
        <input
          className="formInput"
          placeholder="..."
          type="text"
          name="weight"
          value={state.weight}
          onChange={handelChange}
        />
      </label>
      <label className="formFild">
        <span className="formText">Description: </span>
        <textarea
          className="formTextArea"
          placeholder="Product info ..."
          type="text"
          rows="5"
          name="description"
          value={state.description}
          onChange={handelChange}
        />
      </label>
      <button className="mainButton" type="submit">
        Save
      </button>

      <button className="mainButton" type="button" onClick={handleClick}>
        Cancel
      </button>
    </FormStyled>
  )
}

export default Form
