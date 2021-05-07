import { useDispatch } from "react-redux"
import modalActions from "../../redux/actions/modalActions"
import productsOperations from "../../redux/operations/productsOperations"
import DeleteModalStyled from "./DeleteModalStyled"

const DeleteModal = ({id}) => {
  const dispatch = useDispatch()

  const Delete = () => {
    dispatch(productsOperations.deleteProduct(id));
    dispatch(modalActions.offModal())
    dispatch(modalActions.clearModalContent())
    document.body.style.overflow = 'visible'
  }
  const Cancel = () => {
    dispatch(modalActions.clearModalContent())
    dispatch(modalActions.offModal())
  }
  return (
    <DeleteModalStyled>
      <p className="text">
        Do you want to delete product?
      </p>
      <div className="btnContainer">
        <button type="button" className="cancel secondaryButton" onClick={Cancel}>
          Cancel
        </button>
        <button type="button" className="confirm mainButton" onClick={Delete}>
          Yes
        </button>
      </div>
    </DeleteModalStyled>
  )
}

export default DeleteModal