import styled from 'styled-components'

export const ButtonItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ButtonContainer = styled.button`
  width: ${(props) => (props.isTrue ? '85%' : '290px')};
  height: 41px;
  background: ${(props) => (props.isButtonEnabled ? '#117df9' : '#C0C0C0')};
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 24px;

  @media (max-width: 480px) {
    width: ${(props) => (props.isTrue ? '55%' : '150px')};
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    width: ${(props) => (props.isTrue ? '55%' : '150px')};
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
  }
  &&:hover {
    opacity: 0.8;
  }

  &&:active {
    opacity: 0.6;
  }
`
