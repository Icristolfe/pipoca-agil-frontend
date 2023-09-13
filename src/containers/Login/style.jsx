import styled from 'styled-components'

export const Container = styled.div`
  background-color: #b13731;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`

export const PipocaLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 30px;

  @media (max-width: 480px) {
    margin: 0 0 10px 0;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    margin-bottom: 10px;
  }
`

export const ContainerItems = styled.div`
  background-color: #fccc5c;
  width: 497px;
  height: 95%;
  border-radius: 5px;
  padding-top: 40px;
  overflow: hidden;

  @media (max-width: 480px) {
    width: 90%;
    height: 97%;
    font-size: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 20px;
    overflow: auto;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    width: 80%;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: auto;
  }

  .align-house {
    display: flex;
    padding: 15px 0 0 35px;

    @media (max-width: 480px) {
      padding: 0 0 0 10px;
    }

    @media (min-width: 481px) and (max-width: 767px) {
      padding: 0 0 0 30px;
      margin-top: 100px;
    }
  }

  .text-align {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 30px;

    @media (max-width: 480px) {
      margin-bottom: 0;
    }

    @media (min-width: 481px) and (max-width: 767px) {
      margin-bottom: 10px;
    }

    h1 {
      font-size: 24px;
      font-weight: 700;

      @media (max-width: 480px) {
        font-size: 18px;
      }
    }
  }
`

export const SocialContainer = styled.div`
  display: none;
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

  .formikmessage {
    font-size: 10px;
    color: #b22222;
    margin-left: 20px;
    margin-bottom: 5px;

    @media (min-width: 481px) and (max-width: 767px) {
      margin-left: 88px;
      margin-bottom: 3px;
    }

    @media (max-width: 480px) {
      margin-left: 13px;
      margin-bottom: 2px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
  }
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

  @media (min-width: 481px) and (max-width: 767px) {
    padding-right: 45px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    padding-right: 30px;
    margin-bottom: 10px;
  }
`

export const Cadastre = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
  font-size: 14px;

  @media (max-width: 480px) {
    margin: 15px 0;
  }

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

export const Label = styled.label`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  margin: 20px 0 5px 45px;

  @media (min-width: 481px) and (max-width: 767px) {
    margin: 5px 0px 5px 175px;
  }

  @media (max-width: 480px) {
    margin: 5px 0 5px 25px;
  }
`
