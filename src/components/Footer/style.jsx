import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100px;
  background-color: #333333;
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  p {
    margin-right: 5px;
  }
`

export const ContainerAudio = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const ContainerSocial = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const Icons = styled.img`
  &&:active {
    opacity: 0.6;
  }

  &&:hover {
    opacity: 0.8;
  }
`
