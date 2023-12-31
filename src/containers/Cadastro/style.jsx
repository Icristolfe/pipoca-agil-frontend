import styled from 'styled-components'

export const Container = styled.div`
  background-color: #b13731;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

export const PipocaLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 30px;

  @media (max-width: 480px) {
    display: none;
  }
`

export const ContainerItems = styled.div`
  background-color: #fccc5c;
  width: 497px;
  height: 90%;
  border-radius: 5px;

  @media (min-width: 481px) and (max-width: 767px) {
    width: 80%;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: auto;
  }

  @media (max-width: 480px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    overflow: auto;
  }

  .align-house {
    display: flex;
    padding: 15px 0 0 35px;

    @media (max-width: 480px) {
      padding: 0 0 0 10px;
    }
  }

  .text-align {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 30px;

    h1 {
      font-size: 24px;
      font-weight: 700;
    }
  }

  .formikmessage {
    font-size: 10px;
    color: #b22222;
    margin: 0px 0 5px 20px;
  }
`

export const InputContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 55px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  .nameinputs {
    display: flex;
    justify-content: center;

    label {
      margin-left: 55px;
      @media (max-width: 480px) {
        margin-left: 25px;
      }

    }
  }

  p {
    color: #1a1a1a;
    font-weight: 700;
    font-size: 12px;
  }
`

export const ForgetPassword = styled.a`
  color: #117df9;
  cursor: pointer;
`

export const LinkAlign = styled.div`
  display: flex;
  justify-content: end;
  padding-right: 48px;
  margin-bottom: 20px;
`

export const Cadastre = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
  font-size: 14px;

  @media (max-width: 480px) {
    margin: 5px 0;
    font-size: 12px;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    margin: 20px 0;
    font-size: 14px;
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
  gap: 5px;
  margin-bottom: 5px;
  margin-left: 20px;

  @media (max-width: 480px) {
    margin-left: 8%;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    margin-left: 22%;
  }
`

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-bottom: 30px;
  gap: 10px;

  a {
    text-decoration: none;
    border-bottom: 2px solid #000;
    cursor: pointer;
  }

  span {
    font-size: 12px;
  }
`

export const AlignInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  label {
    margin-left: 20px;
  }
`

export const Priv = styled.div`
  display: flex;
  justify-content: start;
  gap: 3px;
`