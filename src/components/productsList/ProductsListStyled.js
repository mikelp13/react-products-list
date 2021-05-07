import styled from 'styled-components'

export const Wrapper = styled.div`
  .ProductList {
    margin-bottom: 30px;
  }
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 3px;
    &:not(:last-child) {
      margin-bottom: 10px;
    }

    img {
      margin-right: 10px;
    }

    .itemContainer {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-right: 10px;
    }
    .title {
      margin-bottom: 10px;
    }
    .label {
      font-size: 14px;
      color: #949494;
    }

    .descriptionContainer {
      margin-bottom: 10px;
 
      & .label {
        display: block;
        margin-bottom: 5px;
      }
    }
    .detailsButton {
      padding: 5px;
      min-width: 90px;
      height: 30px;
    }
    .deleteButton {
      width: 50px;
      height: 50px;
      border: none;
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
      background-color: transparent;
      cursor: pointer;
      outline: none;
      & > svg {
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      &:hover > svg,
      &:focus > svg {
        fill: red;
        transform: scale(1.3);
      }
    }
  }

  .ProductList-item-enter {
    opacity: 0;
    transform: translateX(-100%);
  }
  .ProductList-item-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 250ms linear;
  }
  .ProductList-item-exit {
    opacity: 1;
    transform: translateX(0);
  }
  .ProductList-item-exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: all 250ms linear;
  }
`
