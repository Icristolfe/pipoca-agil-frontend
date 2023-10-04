import styled from 'styled-components'

export const Container = styled.div`
  background-color: #b13731;
  width: 100vw;
  height: 80px;
  padding: 0px 10px;
  display: flex;
  justify-content: space-around;
  position: absolute;

  @media (min-width: 481px) and (max-width: 767px) {
  }

  @media (max-width: 480px) {
    font-size: 10px;
    width: 210px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    position: absolute;
    justify-content: space-between;
  }
`
export const LinkContainer = styled.div`
  padding: 0px 10px;
  display: flex;
  align-items: center;
  gap: 35px;
  margin-right: 210px;

  @media (min-width: 481px) and (max-width: 767px) {
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: left;
  }
`
export const HeaderLink = styled.a`
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;

  &&:active {
    opacity: 0.6;
  }

  &&:hover {
    opacity: 0.8;
  }
`
export const ImageLogo = styled.img`
  width: 85px;

  @media (max-width: 480px) {
    display: none;
  }
`
export const ContainerButtons = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

export const HeaderButton = styled.button`
  width: 150px;
  height: 55px;
  border-radius: 10px;
  border: 2px solid #fff;
  background: ${(props) => (props.login ? '#FCCC5C' : 'none')};
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    width: 60%;
    height: 55px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }

  &&:active {
    opacity: 0.6;
  }

  &&:hover {
    opacity: 0.8;
  }
`

export const ContainerResp = styled.div`
  display: none;
  margin-left: 5px;

  @media (max-width: 480px) {
    display: inline-block;
    display: ${(props) => (props.isOpen ? 'none' : 'block')};
  }
`
export const BackContainer = styled.div`
  width: 100%;
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};

  display: none;

  @media (max-width: 480px) {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
`
