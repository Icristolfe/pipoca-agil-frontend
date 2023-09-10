import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik' // Import useFormik
import * as Yup from 'yup' // Import Yup for validation schema
import { useState } from 'react'

// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
// import { useLinkedIn } from 'react-linkedin-login-oauth2'
// import { useGoogleLogin } from '@react-oauth/google'
import { toast } from 'react-toastify'
import apiPipoca from '../../services/api'

import {
  Container,
  PipocaLogo,
  ContainerItems,
  Label,
  // Social,
  // LinkButton,
  // SocialContainer,
  InputContainer,
  ForgetPassword,
  LinkAlign,
  Cadastre,
} from './style'

import { Input, Button } from '../../components'

import House from '../../assets/house.svg'
import Logo from '../../assets/logologin.svg'
// import Facebook from '../../assets/facebook.svg'
// import Linkedin from '../../assets/linkedin.svg'
// import Google from '../../assets/google.svg'

function Login() {
  const navigate = useNavigate()
  const [isButtonEnabled] = useState(true)
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [facebookUser, setFacebookUser] = useState(null)
  // const [googleUser, setGoogleUser] = useState(null)
  // const [linkedInUser, setLinkedInUser] = useState(null)

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Email inválido')
      .required('Campo Email é obrigatório'),
    senha: Yup.string()
      .required('Campo Senha é obrigatório')
      .min(8, 'A senha deve ter no mínimo 8 caracteres'),
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      senha: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await apiPipoca.post('/login', {
          email: values.email,
          senha: values.senha,
        })
        
        if (response.status === 201 || response.status === 200) {
          toast.success('Login bem-sucedido!')
        } else {
          toast.error('Falha ao fazer login. Verifique suas credenciais.')
        }
      } catch (error) {
        toast.error(
          'Ocorreu um erro ao fazer login. Tente novamente mais tarde.',
        )
      }
    },
  })

  // const login = useGoogleLogin({
  //   onSuccess: async (tokenResponse) => {
  //     try {
  //       // Faça uma solicitação usando o Axios para obter informações do usuário
  //       const response = await axios.get(
  //         'https://www.googleapis.com/oauth2/v2/userinfo',
  //         {
  //           headers: {
  //             Authorization: `Bearer ${tokenResponse.access_token}`,
  //           },
  //         },
  //       )

  //       setGoogleUser(response.data)
  //       console.log(response.data) // Isso imprimirá as informações do usuário
  //     } catch (error) {
  //       console.error('Erro ao obter informações do usuário do Google:', error)
  //     }
  //   },
  // })

  // const { linkedInLogin } = useLinkedIn({
  //   clientId: '777hvkggucrf9f',
  //   redirectUri: `${window.location.origin}/linkedin`,
  //   onSuccess: (code) => {
  //     // O usuário está conectado com o LinkedIn
  //     // Aqui você pode fazer uma chamada à API do LinkedIn para obter informações do usuário
  //     fetch('https://api.linkedin.com/v2/me', {
  //       headers: {
  //         Authorization: `Bearer ${code}`,
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setLinkedInUser(data)
  //         console.log(data) // Isso imprimirá as informações do usuário
  //       })
  //       .catch((error) => {
  //         console.error(
  //           'Erro ao obter informações do usuário do LinkedIn:',
  //           error,
  //         )
  //       })
  //   },
  //   onError: (error) => {
  //     console.log('Erro no login do LinkedIn', error)
  //   },
  // })
  // const responseFacebook = (response) => {
  //   if (response.status === 'connected') {
  //     // O usuário está conectado com o Facebook
  //     setFacebookUser(response)
  //     console.log(response) // Isso imprimirá as informações do usuário
  //   } else {
  //     console.log('Falha no login do Facebook')
  //   }
  // }

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
        {/* <SocialContainer>
          <LinkButton onClick={linkedInLogin}>
            <Social src={Linkedin} alt="social" true={true} />
          </LinkButton>

          <FacebookLogin
            appId="681215020114770"
            autoLoad={false}
            fields="name,email,picture"
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
        </SocialContainer> */}

        {/* <Divider /> */}

        <InputContainer>
          <form onSubmit={formik.handleSubmit}>
            <Label>Email</Label>
            <span className="formikmessage">
              {formik.touched.email && formik.errors.email ? (
                <div className="formikmessage">{formik.errors.email}</div>
              ) : null}
            </span>
            <Input
              type="email"
              label="E-mail"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <Label>Senha</Label>
            <span className="formikmessage">
              {formik.touched.senha && formik.errors.senha ? (
                <div className="formikmessage">{formik.errors.senha}</div>
              ) : null}
            </span>
            <Input
              type="password"
              label="Senha"
              id="senha"
              name="senha"
              value={formik.values.senha}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <LinkAlign>
              <ForgetPassword onClick={() => navigate('/recuperarsenha')}>
                Esqueceu a senha?
              </ForgetPassword>
            </LinkAlign>
            <Button
              label="Login"
              isTrue={true}
              isButtonEnabled={isButtonEnabled}
              type="submit"
            />

            <Cadastre>
              <p>
                Não possui cadastro ?{' '}
                <a onClick={() => navigate('/cadastro')}>Cadastrar</a>
              </p>
            </Cadastre>
          </form>
        </InputContainer>
      </ContainerItems>
    </Container>
  )
}

export default Login
