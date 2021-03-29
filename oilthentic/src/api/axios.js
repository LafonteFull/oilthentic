import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://172.31.34.57:4000'
})

export default instance