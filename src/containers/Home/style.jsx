import styled from 'styled-components'

export const Container = styled.div`
  background: #fccc5c;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 480px) {
    align-items: start;
  }
`

export const ContainerContent = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    display: flex;
    margin: auto;
  }
`
export const ContainerCarousel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;

  @media (max-width: 480px) {
    width: 300px;
  }
`
export const ContainerHeader = styled.div`
  width: 100vw;
  height: 80px;

  @media (max-width: 480px) {
    width: 80px;
    height: 100vh;
    display: flex;
  }
`
