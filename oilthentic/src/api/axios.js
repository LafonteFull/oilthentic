import axios from 'axios'

const instance = axios.create({
  baseURL: 'api.younglivingindonesiaevents.com'
})

export default instance