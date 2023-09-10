import PropTypes from 'prop-types'
import { ButtonContainer, ButtonItem } from './style'

function Button({ label, onClick, isButtonEnabled, isTrue }) {
  return (
    <ButtonItem>
      <ButtonContainer
        isTrue={isTrue}
        onClick={onClick}
        disabled={!isButtonEnabled}
        isButtonEnabled={isButtonEnabled}
      >
        {label}
      </ButtonContainer>
    </ButtonItem>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isButtonEnabled: PropTypes.bool.isRequired,
  isTrue: PropTypes.bool,
}

export default Button
