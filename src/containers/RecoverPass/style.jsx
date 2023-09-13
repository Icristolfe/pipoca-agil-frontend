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
  overflow: hidden;
`

export const PipocaLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 30px;

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`

export const ContainerItems = styled.div`
  background-color: #fccc5c;
  width: 95%;
  height: 95%;
  border-radius: 5px;
  overflow: hidden;

  @media (max-width: 480px) {
    overflow: auto;
  }

  .align-house {
    display: flex;
    padding: 15px 0 0 35px;

    @media (max-width: 480px) {
      padding: 5px 0 0 35px;
    }
  }

  .text-align {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 30px;
    margin-top: 40px;

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
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .nameinputs {
    display: flex;
    justify-content: center;
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
  margin: 50px;

  @media (max-width: 480px) {
    margin: 10px;
    align-items: center;
  }
`

export const Label = styled.label`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 5px;
  margin-left: 30px;
`

export const AlignInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  label {
    margin-left: 20px;
  }
`
