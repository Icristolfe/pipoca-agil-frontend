import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { useLinkedIn } from 'react-linkedin-login-oauth2'
import { useGoogleLogin } from '@react-oauth/google'
import { toast } from 'react-toastify'
import apiPipoca from '../../services/api'

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
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [faceUser, setFaceUser] = useState()

  async function loginUser(email, password) {
    try {
      const response = await apiPipoca.post('/api/login', {
        email,
        password,
      })

      if (response.status === 200) {
        toast.success('Login bem-sucedido!')
      } else {
        toast.error('Falha ao fazer login. Verifique suas credenciais.')
      }
    } catch (error) {
      toast.error('Ocorreu um erro ao fazer login. Tente novamente mais tarde.')
    }
  }

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
          <Input
            type="email"
            label="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            label="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <LinkAlign>
            <ForgetPassword>Esqueceu a senha?</ForgetPassword>
          </LinkAlign>
          <Button
            label="Login"
            isTrue={true}
            isButtonEnabled={isButtonEnabled}
            onClick={() => loginUser(email, password)}
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
