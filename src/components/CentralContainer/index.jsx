import {
  StyledCentralContainer,
  TextAnimationContainer,
  Text,
  QuestionContainer,
  ButtonContainer,
} from './style'

import { useNavigate } from 'react-router-dom'
import Button from '../Button'

// eslint-disable-next-line react/prop-types
const CentralContainer = ({ showQuestion }) => {
  const navigate = useNavigate()
  return (
    <StyledCentralContainer>
      <TextAnimationContainer>
        <Text>Seja Bem-Vindo(a) ao site Pipoca Ágil</Text>
      </TextAnimationContainer>
      {showQuestion && (
        <QuestionContainer>
          <ButtonContainer>
            <Button
              label="Login"
              onClick={() => navigate('/login')}
              isButtonEnabled={true}
            />
            <Button
              label="Cadastro"
              onClick={() => navigate('/cadastro')}
              isButtonEnabled={true}
            />
          </ButtonContainer>
        </QuestionContainer>
      )}
    </StyledCentralContainer>
  )
}

export default CentralContainer
