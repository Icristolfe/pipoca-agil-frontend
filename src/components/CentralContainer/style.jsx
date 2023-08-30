import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const textAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const StyledCentralContainer = styled.div`
  height: 80%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.3); 
  backdrop-filter: blur(10px); 
  justify-content: center;
  animation: ${fadeIn} 1s forwards;
  border-radius: 10px;
  margin-top: 20px; /* Adicionando espaço superior */
`;

export const TextAnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  position: absolute;
  top: 10%;
  left: 100%;
  animation: ${textAnimation} 5s forwards;
`;

export const Text = styled.p`
  font-size: 24px;
  color: #fff;
  font-style: bold;
  white-space: nowrap;
`;

export const QuestionContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

export const QuestionText = styled.p`
  font-size: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`;
