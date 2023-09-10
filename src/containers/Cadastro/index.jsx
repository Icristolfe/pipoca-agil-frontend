import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import apiPipoca from '../../services/api'

import { toast } from 'react-toastify'
import {
  Container,
  PipocaLogo,
  ContainerItems,
  InputContainer,
  Cadastre,
  Label,
  CheckboxContainer,
  AlignInputs,
  Priv,
} from './style'

import { Input, Button, Checkbox } from '../../components'

import House from '../../assets/house.svg'
import Logo from '../../assets/logologin.svg'

function Cadastro() {
  const navigate = useNavigate()

  const [isCheckedAtt, setIsCheckedAtt] = useState(false)
  const [isCheckedPriv, setIsCheckedPriv] = useState(false)
  const [isButtonEnabled, setIsButtonEnabled] = useState(false)

  const handleCheckboxChangeAtt = () => {
    setIsCheckedAtt(!isCheckedAtt)
  }

  const handleCheckboxChangePriv = () => {
    setIsCheckedPriv(!isCheckedPriv)
    setIsButtonEnabled(!isCheckedPriv)
  }

  const formik = useFormik({
    initialValues: {
      nome: '',
      sobrenome: '',
      datanascimento: '',
      email: '',
      senha: '',
      confirmarSenha: '',
      isCheckedAtt: false,
      isCheckedPriv: false,
    },
    validationSchema: Yup.object({
      nome: Yup.string().required('Campo Nome é obrigatório'),
      sobrenome: Yup.string().required('Campo Sobrenome é obrigatório'),
      datanascimento: Yup.date()
        .nullable()
        .required('Campo Data de Nascimento é obrigatório')
        .test(
          'is-of-age',
          'Você deve ter entre 18 e 120 anos',
          function (value) {
            const today = new Date()
            const minDate = new Date()
            minDate.setFullYear(today.getFullYear() - 120) // 120 anos atrás
            const maxDate = new Date()
            maxDate.setFullYear(today.getFullYear() - 18) // 18 anos atrás

            return value >= minDate && value <= maxDate
          },
        ),
      email: Yup.string()
        .email('Email inválido')
        .required('Campo Email é obrigatório'),
      senha: Yup.string()
        .min(8, 'A senha deve ter no mínimo 8 caracteres')
        .matches(
          /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])/,
          'A senha deve conter um número, uma letra maiúscula e caractere especial',
        )
        .required('Campo Senha é obrigatório'),
      confirmarSenha: Yup.string()
        .oneOf([Yup.ref('senha'), null], 'As senhas devem ser iguais')
        .required('Campo Confirmar Senha é obrigatório'),
    }),
    onSubmit: (values) => {
      if (
        !values.nome ||
        !values.sobrenome ||
        !values.datanascimento ||
        !values.email ||
        !values.senha ||
        !values.confirmarSenha
      ) {
        // Exiba uma mensagem de erro informando que todos os campos devem ser preenchidos.
        toast.error('Por favor, preencha todos os campos.', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        return // Impede a execução do POST se algum campo estiver vazio.
      }

      // Se todos os campos estiverem preenchidos, continue com a chamada da API.
      apiPipoca
        .post('/users', values)
        .then(() => {
          toast.success('Cadastro realizado com sucesso!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        })
        .catch(() => {
          toast.error('Erro ao cadastrar. Por favor, tente novamente.', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        })
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
          <h1>Faça seu Cadastro</h1>
        </div>

        <InputContainer>
          <div className="nameinputs">
            <AlignInputs className="align-inputs">
              <Label>Nome</Label>
              {formik.touched.nome && formik.errors.nome ? (
                <span className="formikmessage">{formik.errors.nome}</span>
              ) : null}
              <Input type="text" {...formik.getFieldProps('nome')} />
            </AlignInputs>
            <AlignInputs className="align-inputs">
              <Label>Sobrenome</Label>
              {formik.touched.sobrenome && formik.errors.sobrenome ? (
                <span className="formikmessage">{formik.errors.sobrenome}</span>
              ) : null}
              <Input type="text" {...formik.getFieldProps('sobrenome')} />
            </AlignInputs>
          </div>

          <Label>Data de Nascimento</Label>
          {formik.touched.datanascimento && formik.errors.datanascimento ? (
            <span className="formikmessage">
              {formik.errors.datanascimento}
            </span>
          ) : null}
          <Input
            type="date"
            widthChange={true}
            onBlur={(e) => {
              const selectedDate = e.target.value
              const dateObj = new Date(selectedDate)
              const formattedDate = `${dateObj.getFullYear()}-${String(
                dateObj.getMonth() + 1,
              ).padStart(2, '0')}-${String(dateObj.getDate()).padStart(
                2,
                '0',
              )}T${String(dateObj.getHours()).padStart(2, '0')}:${String(
                dateObj.getMinutes(),
              ).padStart(2, '0')}:${String(dateObj.getSeconds()).padStart(
                2,
                '0',
              )}.${String(dateObj.getMilliseconds()).padStart(3, '0')}Z`
              formik.setFieldValue('datanascimento', formattedDate)
            }}
            {...formik.getFieldProps('datanascimento')}
          />

          <Label>Email</Label>
          {formik.touched.email && formik.errors.email ? (
            <span className="formikmessage">{formik.errors.email}</span>
          ) : null}
          <Input
            type="text"
            widthChange={true}
            {...formik.getFieldProps('email')}
          />

          <Label>Senha</Label>
          {formik.touched.senha && formik.errors.senha ? (
            <span className="formikmessage">{formik.errors.senha}</span>
          ) : null}
          <Input
            type="password"
            widthChange={true}
            {...formik.getFieldProps('senha')}
          />

          <Label>Confirmar Senha</Label>
          {formik.touched.confirmarSenha && formik.errors.confirmarSenha ? (
            <span className="formikmessage">
              {formik.errors.confirmarSenha}
            </span>
          ) : null}
          <Input
            type="password"
            widthChange={true}
            {...formik.getFieldProps('confirmarSenha')}
          />

          <Cadastre>
            <a onClick={() => navigate('/login')}>Já possuo uma conta</a>
          </Cadastre>

          <CheckboxContainer>
            <Priv>
              <Checkbox
                checked={isCheckedAtt}
                onChange={handleCheckboxChangeAtt}
              />
              <span>Eu quero receber atualizações</span>
            </Priv>

            <Priv>
              <Checkbox
                checked={isCheckedPriv}
                onChange={handleCheckboxChangePriv}
              />
              <span>
                Eu aceito os <a>termos de uso</a> e{' '}
                <a>politica de privacidade</a>
              </span>
            </Priv>
          </CheckboxContainer>
          <Button
            label="Cadastrar"
            onClick={formik.handleSubmit}
            isButtonEnabled={isButtonEnabled}
          />
        </InputContainer>
      </ContainerItems>
    </Container>
  )
}

export default Cadastro
