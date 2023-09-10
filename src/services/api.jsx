import axios from 'axios'

const apiPipoca = axios.create({
  baseURL: 'https://pipoca-agil-backend-eb2b6ef17563.herokuapp.com',
})

export default apiPipoca
