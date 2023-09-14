import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const textAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`

export const StyledCentralContainer = styled.div`
  height: 80%;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.2);
  justify-content: center;
  animation: ${fadeIn} 1s forwards;
  border-radius: 10px;
  margin-top: 20px;

  @media (min-width: 481px) and (max-width: 767px) {
    width: 80%;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
  }

  @media (max-width: 480px) {
    width: 90%;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.2);
    overflow: auto;
    margin-left: 18px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.2);
  }
`

export const TextAnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  position: absolute;
  top: 15%;
  left: 100%;
  animation: ${textAnimation} 1s forwards;

  @media (max-width: 480px) {
    top: 30%;
    font-size: 18px;
    left: 102%;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    top: 30%;
    font-size: 18px;
    left: 102%;
  }
`

export const Text = styled.p`
  font-size: 40px;
  color: #fff;
  font-style: bold;
  white-space: nowrap;
  text-align: center;

  @media (max-width: 480px) {
    width: 90%;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 18px;
  }
`

export const QuestionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  text-align: center;
`

export const QuestionText = styled.p`
  font-size: 20px;
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;

  @media (max-width: 480px) {
    width: 60%;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
