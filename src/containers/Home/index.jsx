import { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Container,
  ContainerContent,
  ContainerCarousel,
  ContainerHeader,
} from './style'
import { Header, Footer, ImageSlider } from '../../components'

function Home() {
  const [images, setImages] = useState([])

  useEffect(() => {
    const fetchRandomImages = async () => {
      try {
        const imageUrls = []

        // Faz 5 solicitações para imagens aleatórias do Lorem Picsum usando o Axios
        for (let i = 0; i < 5; i++) {
          const response = await axios.get(
            'https://picsum.photos/400/300/?random',
          )
          const imageUrl = response.request.responseURL
          imageUrls.push(imageUrl)
        }

        setImages(imageUrls)
      } catch (error) {
        console.error('Erro ao buscar imagens:', error)
      }
    }

    fetchRandomImages()
  }, [])

  return (
    <Container>
      <ContainerHeader>
        <Header />
      </ContainerHeader>
      <ContainerContent>
        <ContainerCarousel>
          <ImageSlider images={images} />
        </ContainerCarousel>
      </ContainerContent>
      <Footer />
    </Container>
  )
}

export default Home
