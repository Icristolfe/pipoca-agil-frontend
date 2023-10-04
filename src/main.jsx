import React from 'react'
import ReactDOM from 'react-dom/client'
import RoutesApp from './routes/routes.jsx'
import GlobalStyle from './styles/GlobalStyle.jsx'
import { ToastContainer } from 'react-toastify'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { StyleSheetManager } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="1092732389996-ahbli6tqojkd7a97gadt1gl1tlh9i81n.apps.googleusercontent.com">
      <ToastContainer autoClose={2000} theme="dark" />
      <StyleSheetManager shouldForwardProp={(prop) => prop !== 'active'}>
        <RoutesApp /> <GlobalStyle />
      </StyleSheetManager>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
