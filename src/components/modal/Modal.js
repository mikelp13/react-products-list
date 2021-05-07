import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ModalWindow from './ModalStyled'
import {getModalState} from '../../redux/selectors/modalSelector'
import modalActions from '../../redux/actions/modalActions'

const Modal = ({ children }) => {
  const openModal = useSelector(getModalState)
  const dispatch = useDispatch()
  
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    document.body.className = openModal ? 'open' : 'close'
    document.body.style.overflow = openModal ? 'hidden' : 'visible'
  }, [openModal])

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      dispatch(modalActions.toggleModal())
      dispatch(modalActions.clearModalContent())
    }
    document.body.style.overflow = 'visible'
  }
  const handleClick = e => {
    if (e.target.dataset.name !== 'overlay') {
      return
    }
    dispatch(modalActions.toggleModal())
    dispatch(modalActions.clearModalContent())
    document.body.style.overflow = 'visible'
  }
  // const closeModal = () => {
  //   dispatch(modalActions.offModal())
  //   dispatch(modalActions.clearModalContent())
  //   document.body.style.overflow = 'visible'
  // }

  return (
    <>
      {openModal && (
        <ModalWindow onClick={handleClick} data-name="overlay">
          <div className="modal" data-name="modal">
            {children}
          </div>
        </ModalWindow>
      )}
    </>
  )
}

export default Modal
