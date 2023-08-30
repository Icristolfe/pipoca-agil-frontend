import PropTypes from 'prop-types'
import { CheckboxContainer, HiddenCheckbox, StyledCheckbox } from './style'

const Checkbox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked} />
  </CheckboxContainer>
)

export default Checkbox
Checkbox.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}
