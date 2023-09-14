import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  padding: 0px 20px;
  background-color: #b13830;
`

export const Popcorn = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
`

export const CentralContainer = styled.div`
  width: 50%; /* Definindo a largura da CentralContainer */
  max-width: 400px; /* Limitando a largura máxima */
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 0px 20px; /* Adicionando padding para o conteúdo */
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-25%, -25%);

  @media (max-width: 480px) {
    width: 90%;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
