import { useState } from 'react'
import { InputContainer, StyledInput, InputAlign, PasswordIcon } from './style'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const Input = ({ type, widthChange, ...props }) => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <InputContainer>
      <InputAlign>
        <StyledInput
          widthChange={widthChange}
          type={showPassword ? 'text' : type}
          {...props}
        />
        {type === 'password' && (
          <PasswordIcon
            widthChange={widthChange}
            onClick={togglePasswordVisibility}
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </PasswordIcon>
        )}
      </InputAlign>
    </InputContainer>
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  widthChange: PropTypes.bool,
}

export default Input
