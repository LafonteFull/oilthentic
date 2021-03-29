import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.younglivingindonesiaevents.com'
})

export default instance