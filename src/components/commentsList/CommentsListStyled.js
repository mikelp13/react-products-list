import styled from 'styled-components'

const CommentsWrapper = styled.div`
  margin-bottom: 30px;

  .commentItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-top: 1px solid #ccc;
  }

  .date {
    font-size: 12px;
    margin-bottom: 10px;
  }
  .deleteButton {
    background-color: transparent;
    cursor: pointer;
    outline: none;
    border: none;

    svg {
      transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
      &:hover {
        transform: scale(1.5);
        fill: red;
      }
    }
  }
`
export default CommentsWrapper
