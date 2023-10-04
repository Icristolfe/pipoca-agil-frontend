import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import axios from 'axios'
import gerarSenha from '../../Utils/gerarSenha'

import { useGoogleLogin } from '@react-oauth/google'
import { toast } from 'react-toastify'
import apiPipoca from '../../services/api'

import {
  Container,
  PipocaLogo,
  ContainerItems,
  Label,
  Social,
  LinkButton,
  SocialContainer,
  InputContainer,
  ForgetPassword,
  LinkAlign,
  Cadastre,
} from './style'

import { Input, Button, Divider } from '../../components'

import House from '../../assets/house.svg'
import Logo from '../../assets/logologin.svg'
import Google from '../../assets/google.svg'

function Login() {
  const navigate = useNavigate()
  const [isButtonEnabled] = useState(true)
  const [autoSenha] = useState(gerarSenha)
  const [googleUser, setGoogleUser] = useState({
    nome: '',
    sobrenome: '',
    datanascimento: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    isCheckedAtt: true,
    isCheckedPriv: true,
  })
  const currentDate = new Date()
  const formattedDate = `${currentDate.getFullYear()}-${String(
    currentDate.getMonth() + 1,
  ).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`
  console.log(formattedDate)
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
        const data = await apiPipoca.post('/login', {
          email: values.email,
          senha: values.senha,
        })
        const token = data.data.access_token

        localStorage.setItem('token', token)
        if (data.status === 201 || data.status === 200) {
          toast.success('Login bem-sucedido!')
          navigate('/home')
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

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const response = await axios.get(
          'https://www.googleapis.com/oauth2/v1/userinfo',
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          },
        )
        console.log(tokenResponse.access_token)
        setGoogleUser({
          nome: response.data.given_name,
          sobrenome: response.data.family_name,
          datanascimento: formattedDate, // Define a data de nascimento
          email: response.data.email,
          senha: autoSenha, // Use a senha gerada automaticamente
          confirmarSenha: autoSenha, // Use a mesma senha para a confirmação
        })
        console.log(response.data)

        // Enviar as informações para o backend
        await apiPipoca.post('/user', { googleUser })

        // Após a resposta do backend, você pode lidar com o redirecionamento ou outras ações necessárias.
        // Por exemplo, você pode redirecionar o usuário para a página de perfil.
      } catch (error) {
        console.error('Erro ao obter informações do usuário do Google:', error)
      }
    },
  })

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
          <LinkButton onClick={() => login()}>
            <Social src={Google} alt="social" />
          </LinkButton>
        </SocialContainer>

        <Divider />

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
              isTrue={'true'}
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
