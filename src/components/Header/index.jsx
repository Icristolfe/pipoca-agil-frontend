import { Container, HeaderLink, ImageLogo, LinkContainer } from './style'

import Logo from '../../assets/logologin.svg'
function Header() {
  return (
    <Container>
      <LinkContainer>
        <HeaderLink>INICIO</HeaderLink>
        <HeaderLink>SOBRE</HeaderLink>
        <HeaderLink>PODCAST</HeaderLink>
        <HeaderLink>PROJETOS</HeaderLink>
        <HeaderLink>CONTATO</HeaderLink>
      </LinkContainer>
      <ImageLogo src={Logo} alt="Logo" />
    </Container>
  )
}

export default Header
