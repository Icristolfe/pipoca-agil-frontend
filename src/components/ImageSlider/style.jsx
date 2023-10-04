import styled from 'styled-components'

export const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .rec.rec-arrow {
    background: #b13731;
    color: #efefef;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .rec.rec-arrow:hover {
    background-color: #efefef;
    color: #b13731;
  }

  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }

  .rec.rec-dot {
    background: #efefef;
    color: #efefef;
  }

  .rec.rec-dot_active {
    box-shadow: 0 0 1px 2px rgba(177, 55, 49, 1);
  }
`

export const CarouselItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  position: relative;
`

export const CarouselImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-left: 35px;
  border-radius: 10px;
`
