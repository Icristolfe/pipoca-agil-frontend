import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'

function PrivateRoute({ children }) {
  const token = localStorage.getItem('token')

  if (token) {
    return <Navigate replace to="/login" />
  }
  // if (isAdmin && !JSON.parse(token).admin) {
  //   return <Navigate replace to="/" />
  // }
  return children
}

export default PrivateRoute

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.component]),
}

PrivateRoute.propTypes = {
  // Certifique-se de que todos os tipos esperados estejam definidos
  someProp: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    // Adicione mais tipos aqui, se necessário
  ]),
}
