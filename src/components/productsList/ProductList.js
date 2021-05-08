import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductsListItem from "./productsListItem/ProductsListItem";
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { Wrapper } from "./ProductsListStyled";
import modalActions from "../../redux/actions/modalActions";
import Modal from "../modal/Modal";
import DeleteModal from "../deleteModal/DeleteModal";
import { getModalContent } from "../../redux/selectors/modalSelector";

const ProductsList = ({products}) => {
  const [deleteProduct, setDeleteProduct] = useState('')
  const showModal = useSelector(getModalContent)
  const dispatch = useDispatch();

  const handleDeleteProduct = (e) => {
    const { id } = e.currentTarget.dataset;
    setDeleteProduct(id)
    dispatch(modalActions.setModalContent("delete"))
    dispatch(modalActions.toggleModal())
  };

  return (
    <>
    <Wrapper>
      <TransitionGroup component="ul" className="ProductList">
        {products.map((product) => (
          <CSSTransition
            key={product.id}
            timeout={250}
            classNames="ProductList-item"
          >
            <ProductsListItem
              product={product}
              onDeleteProduct={handleDeleteProduct}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Wrapper>
       {showModal === 'delete' && (
        <Modal>
          <DeleteModal id={deleteProduct}/>
        </Modal>
      )}
      </>
  );
};

export default ProductsList;