import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useFormik } from 'formik' // Import useFormik
import * as Yup from 'yup' // Import Yup for validation schema
import apiPipoca from '../../services/api'
import { toast } from 'react-toastify'

import {
  Container,
  PipocaLogo,
  ContainerItems,
  InputContainer,
  ForgetPassword,
  LinkAlign,
} from './style'

import { Input, Button } from '../../components'

import House from '../../assets/house.svg'
import Logo from '../../assets/logologin.svg'

function ResetPass() {
  const navigate = useNavigate()
  const [isButtonEnabled] = useState(true)

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Email inválido')
      .required('Campo Email é obrigatório'),
  })

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await apiPipoca.post('/reset-password', {
          email: values.email,
        })

        if (response.status === 200) {
          toast.success('A nova senha foi enviada para seu email!')
        } else {
          toast.error('Falha ao resetar senha. Tente novamente.')
        }
      } catch (error) {
        console.error('Erro ao resetar senha:', error)
        toast.error(
          'Ocorreu um erro ao resetar a senha. Tente novamente mais tarde.',
        )
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
          <h1>Recuperar senha</h1>
        </div>

        <InputContainer>
          {formik.touched.email && formik.errors.email ? (
            <div className="formikmessage">{formik.errors.email}</div>
          ) : null}
          <form onSubmit={formik.handleSubmit}>
            <Input
              type="email"
              label="E-mail"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <Button
              label="Enviar"
              isTrue={true}
              isButtonEnabled={isButtonEnabled}
              type="submit"
            />

            <LinkAlign>
              <ForgetPassword onClick={() => navigate('/login')}>
                Voltar ao login
              </ForgetPassword>
            </LinkAlign>
          </form>
        </InputContainer>
      </ContainerItems>
    </Container>
  )
}

export default ResetPass
