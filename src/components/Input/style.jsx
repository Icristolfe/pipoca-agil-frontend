import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  div {
    display: flex;
  }
`

export const StyledInput = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  width: ${(props) => (props.widthChange ? '90%' : '85%')};

  @media (min-width: 481px) and (max-width: 767px) {
    width: ${(props) => (props.widthChange ? '60%' : '45%')};
  }

  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
    filter: invert(38%) sepia(13%) saturate(0%) hue-rotate(247deg)
      brightness(94%) contrast(90%);
  }
`

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
`

export const InputAlign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

export const PasswordIcon = styled.div`
  position: absolute;
  top: 50%;
  right: ${(props) => (props.widthChange ? '30px' : '50px')};
  transform: translateY(-50%);
  cursor: pointer;
`
