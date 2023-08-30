import styled from 'styled-components'

export const CheckboxContainer = styled.label`
  display: inline-block;
  vertical-align: middle;
  font-size: 12px;
`

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
`

export const StyledCheckbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 15px;
  height: 15px;
  background: ${(props) => (props.checked ? '#117df9' : 'none')};
  border-radius: 3px;
  transition: all 150ms;
  border: solid 2px #000;
  margin-right: 10px;

  ${HiddenCheckbox}:checked + & {
    background: #000;
  }
`
