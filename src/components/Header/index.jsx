import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import {
  Container,
  HeaderLink,
  ImageLogo,
  LinkContainer,
  HeaderButton,
  ContainerButtons,
  ContainerResp,
  BackContainer,
} from './style'

import Logo from '../../assets/logologin.svg'
function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }
  return (
    <>
      <ContainerResp isOpen={isMenuOpen}>
        <button
          style={{ background: 'none', border: 'none' }}
          onClick={toggleMenu}
        >
          <FontAwesomeIcon
            color="#000"
            icon={faBars}
            style={{ fontSize: '35px' }}
          />
        </button>
      </ContainerResp>
      <Container isOpen={isMenuOpen}>
        <BackContainer isOpen={isMenuOpen}>
          <button
            style={{ background: 'none', border: 'none' }}
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: '35px' }} />
          </button>
        </BackContainer>

        <LinkContainer>
          <HeaderLink>INICIO</HeaderLink>
          <HeaderLink>SOBRE</HeaderLink>
          <HeaderLink>PODCAST</HeaderLink>
          <HeaderLink>PROJETOS</HeaderLink>
          <HeaderLink>CONTATO</HeaderLink>
        </LinkContainer>
        <ImageLogo src={Logo} alt="Logo" />
        <ContainerButtons>
          <HeaderButton login={'true'}>
            <FontAwesomeIcon color="#000" icon={faUser} />
            Login
          </HeaderButton>
          <HeaderButton>Cadastro </HeaderButton>
        </ContainerButtons>
      </Container>
    </>
  )
}

export default Header
