import { Container, ContainerAudio, ContainerSocial, Icons } from './style'

import Spotify from '../../assets/spotify.svg'
import Deezer from '../../assets/deezer.svg'
import Applecarplay from '../../assets/applecarplay.svg'
import Tunein from '../../assets/tunein.svg'
import Facebook from '../../assets/facebook2.svg'
import Youtube from '../../assets/youtube.svg'
import Instagram from '../../assets/instagram.svg'
import Xtwitter from '../../assets/twitter.svg'
function Footer() {
  return (
    <Container>
      <ContainerAudio>
        <p>Escute em</p>
        <a href="">
          <Icons src={Spotify} alt="spotify-icon" />
        </a>
        <a href="">
          <Icons src={Deezer} alt="deezer-icon" />
        </a>
        <a href="">
          <Icons src={Applecarplay} alt="applecar-icon" />
        </a>
        <a href="">
          <Icons src={Tunein} alt="tunein-icon" />
        </a>
      </ContainerAudio>

      <ContainerSocial>
        <p>Redes sociais</p>
        <a href="">
          <Icons src={Facebook} alt="facebook-icon" />
        </a>
        <a href="">
          <Icons src={Youtube} alt="youtube-icon" />
        </a>
        <a href="">
          <Icons src={Instagram} alt="instagram-icon" />
        </a>
        <a href="">
          <Icons src={Xtwitter} alt="twitter-icon" />
        </a>
      </ContainerSocial>
    </Container>
  )
}

export default Footer
