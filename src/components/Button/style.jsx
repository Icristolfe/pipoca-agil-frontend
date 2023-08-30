import styled from 'styled-components';

export const ButtonItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ButtonContainer = styled.button`
  width: ${(props) => (props.isTrue ? '85%' : '390px')};
  height: 41px;
  background: ${props => props.isButtonEnabled ? "#117df9" : "#C0C0C0"};
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 24px;

  &&:hover {
    opacity: 0.8;
  }

  &&:active {
    opacity: 0.6;
  }
`;
