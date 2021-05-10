import styled from 'styled-components'

const DetailsStyled = styled.div`
  margin-bottom: 30px;
  display: flex;

  .productImage {
    max-height: 250px;
    margin-right: 20px;
  }

  .detailsContainer {
    margin-right: 20px;
  }

  .title,
  .description{
    margin-bottom: 10px;
  }

  .title {
    font-weight: 700;
  }
  .description {
    line-height: 1.5;
  }

  .text {
    font-size: 14px;
    &:not(:last-child){
      margin-bottom: 10px;
    }
  }
  .editButton {
    align-self: center;
  }
`

export default DetailsStyled
