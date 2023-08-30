import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { useLinkedIn } from 'react-linkedin-login-oauth2'
import { useGoogleLogin } from '@react-oauth/google'

import {
  Container,
  PipocaLogo,
  ContainerItems,
  Social,
  LinkButton,
  SocialContainer,
  InputContainer,
  ForgetPassword,
  LinkAlign,
  Cadastre,
} from './style'

import { Divider, Input, Button } from '../../components'

import House from '../../assets/house.svg'
import Logo from '../../assets/logologin.svg'
import Facebook from '../../assets/facebook.svg'
import Linkedin from '../../assets/linkedin.svg'
import Google from '../../assets/google.svg'

function Login() {
  const navigate = useNavigate()
  const [isButtonEnabled] = useState(true)
  const [faceUser, setFaceUser] = useState()

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  })

  const { linkedInLogin } = useLinkedIn({
    clientId: '777hvkggucrf9f',
    redirectUri: `${window.location.origin}/linkedin`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
    onSuccess: (code) => {
      console.log(code)
    },
    onError: (error) => {
      console.log(error)
    },
  })

  const responseFacebook = (response) => {
    setFaceUser(response)
  }
  console.log(faceUser)
  return (
    <Container>
      <ContainerItems>
        <div className="align-house">
          <img src={House} alt="house-icon" />
        </div>

        <div className="text-align">
          <PipocaLogo src={Logo} alt="logo" />
          <h1>Faça seu Login</h1>
          <p>Use o seu melhor e-mail!</p>
        </div>
        <SocialContainer>
          <LinkButton onClick={linkedInLogin}>
            <Social src={Linkedin} alt="social" true={true} />
          </LinkButton>

          <FacebookLogin
            appId="681215020114770"
            autoLoad={false}
            callback={responseFacebook}
            render={(renderProps) => (
              <LinkButton onClick={renderProps.onClick}>
                <Social src={Facebook} alt="social" />
              </LinkButton>
            )}
          />

          <LinkButton onClick={() => login()}>
            <Social src={Google} alt="social" />
          </LinkButton>
        </SocialContainer>

        <Divider />

        <InputContainer>
          <Input type="email" label="E-mail" />
          <Input type="password" label="Senha" />
          <LinkAlign>
            <ForgetPassword>Esqueceu a senha?</ForgetPassword>
          </LinkAlign>
          <Button
            label="Login"
            isTrue={true}
            isButtonEnabled={isButtonEnabled}
          />
          <Cadastre>
            <p>
              Não possui cadastro ?{' '}
              <a onClick={() => navigate('/cadastro')}>Cadastrar</a>
            </p>
          </Cadastre>
        </InputContainer>
      </ContainerItems>
    </Container>
  )
}

export default Login
