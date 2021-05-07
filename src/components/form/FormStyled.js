import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  .formFild {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    &:nth-child(2) {
      margin-bottom: 30px;
    }
  }
  .formText {
    margin-bottom: 5px;
    font-size: 18px;
    color: #076c77;
  }
  .formInput {
    height: 46px;
    padding: 5px 20px;
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:focus,
    &:hover {
      border-color: #024f94;
    }
  }

  button {
    margin: 0 auto;
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
`;
export default FormStyled;
