import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    
  overflow: hidden;/* Oculta a barra de rolagem */
  }

  body.scrollable {
    overflow: auto; /* Ativa a barra de rolagem pelo scroll */
  }

  ::-webkit-scrollbar {
  width: 5px; /* Defina a largura da barra de rolagem */
}

/* Defina a cor do fundo da barra de rolagem */
::-webkit-scrollbar-track {
  background: none;
}

/* Defina a cor do indicador da barra de rolagem (a parte que você arrasta) */
::-webkit-scrollbar-thumb {
  background: #888;
}

`
