import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import modalActions from '../../redux/actions/modalActions'
import productsOperations from '../../redux/operations/productsOperations'
import FormStyled from './FormStyled'

const initialState = {
  name: 'XIAOMI MI TV 4K ',
  imageUrl:
    'https://m.avmania.zive.cz/getthumbnail.aspx?w=612&h=250&q=60&id_file=851547056',
  count: 4,
  width: 1322,
  height: 456,
  weight: '8kg',
  description: 'Full screen smart flat panel home LCD 4k clear LCD TV off.',
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
    const { imageUrl, name, count, width, height, weight, description } = state
    const newProduct = {
      imageUrl,
      name,
      count: Number(count),
      size: {
        width: Number(width),
        height: Number(height),
      },
      weight,
      description,
    }

    dispatch(productsOperations.addNewProduct(newProduct))
  }

  const handleClick = () => {
    dispatch(modalActions.setModalContent(''))
    dispatch(modalActions.toggleModal())
    document.body.style.overflow = 'visible'
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
          className="formInput count"
          placeholder="..."
          type="number"
          name="count"
          value={state.count}
          onChange={handelChange}
        />
      </label>
      <div className="characteristics">
        <label className="formFild row">
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

        <label className="formFild row">
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
        <label className="formFild row">
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
      </div>
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
      <div className="buttonGroup">
        <button className="secondaryButton" type="button" onClick={handleClick}>
          Cancel
        </button>
        <button className="mainButton" type="submit">
          Save
        </button>
      </div>
    </FormStyled>
  )
}

export default Form

//hardcode product
//   name: 'iphone',
//   imageUrl:
//     'https://cdn.shopify.com/s/files/1/0403/9337/5899/products/ezgif.com-gif-maker_1024x1024@2x.jpg?v=1618519737',
//   count: 2,
//   width: 234,
//   height: 69,
//   weight: '120g',
//   description: 'Apple iPhone 12 Pro, 128 GB/256 GB Grey, Gold, Blue Brand New',
///////////////////////
// name: 'MacBook Pro',
// imageUrl:
//   'https://i.pcmag.com/imagery/reviews/038Dr5TVEpwIv8rCljx6UcF-13..1588802180.jpg',
// count: 5,
// width: 234,
// height: 58,
// weight: '580g',
// description: `A tweaked keyboard and the option for a 10th Generation Intel "Ice Lake" CPU bring typing comfort and better performance to Apple's already-excellent 13-inch MacBook Pro.`,
//////////////////////////////////
// name: 'Canon EOS M50',
// imageUrl:
//   'https://thumbs.dreamstime.com/b/dslr-digital-camera-17822494.jpg',
// count: 10,
// width: 132,
// height: 25,
// weight: '150g',
// description: 'A modern DSLR digital camera and lens isolated on white.',
///////////////////////////////////
//  name: 'XIAOMI MI TV 4K ',
//  imageUrl:
//   'https://m.avmania.zive.cz/getthumbnail.aspx?w=612&h=250&q=60&id_file=851547056',
//  count: 4,
//  width: 1322,
//  height: 456,
//  weight: '8kg',
//  description: 'Full screen smart flat panel home LCD 4k clear LCD TV off.',
