import styled from 'styled-components'

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;

  .characteristics {
    display: flex;
    justify-content: space-between;
  }

  .formFild {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }

  .row, .count {
    width: 80px;
  }

  .formText {
    margin-bottom: 5px;
    font-size: 14px;
    color: #076c77;
  }
  .formInput {
    height: 25px;
    padding: 5px 10px;
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:focus,
    &:hover {
      border-color: #024f94;
    }
  }

  .formTextArea {
    width: 100%;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    resize: none;
    outline: none;
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:focus,
    &:hover {
      border-color: #024f94;
    }
  }
  .buttonGroup {
    display: flex;
    justify-content: space-evenly;
    margin: 20px 0;
  }
`
export default FormStyled
