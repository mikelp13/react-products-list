import { createReducer } from '@reduxjs/toolkit'
import modalActions from '../actions/modalActions'

const modalContentReducer = createReducer('', {
  [modalActions.setModalContent]: (_, { payload }) => payload,
  [modalActions.clearModalContent]: () => ''  
})

export default modalContentReducer
