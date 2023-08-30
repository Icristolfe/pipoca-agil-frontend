import styled from 'styled-components'

export const Container = styled.div`
  background-color: #b13731;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`

export const PipocaLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 30px;
`

export const ContainerItems = styled.div`
  background-color: #fccc5c;
  width: 497px;
  height: 800px;
  border-radius: 5px;

  .align-house {
    display: flex;
    padding: 15px 0 0 35px;
  }

  .text-align {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    margin: 0 0 30px 0 ;

    h1 {
      font-size: 24px;
      font-weight: 700;
    }
  }
`

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 25px;
`

export const Social = styled.img`
  width: ${(props) => (props.true ? '37px' : '30px')};
  height: ${(props) => (props.true ? '37px' : '30px')};
`

export const LinkButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;

  &&:hover {
    opacity: 0.8;
  }

  &&:active {
    opacity: 0.6;
  }
`

export const InputContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const ForgetPassword = styled.a`
  color: #117df9;
  cursor: pointer;
`

export const LinkAlign = styled.div`
  display: flex;
  justify-content: end;
  padding-right: 30px;
  margin-bottom: 30px;
`

export const Cadastre = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
  font-size: 14px;
  a {
    color: #117df9;
    font-weight: 900;
    cursor: pointer;
  }

  a:hover {
    opacity: 0.8;
  }

  a:active {
    opacity: 0.5;
  }
`
