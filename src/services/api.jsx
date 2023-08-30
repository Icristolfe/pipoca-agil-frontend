import axios from 'axios'

const apiPipoca = axios.create({
  baseURL: 'http://localhost:3000'
})

export default apiPipoca