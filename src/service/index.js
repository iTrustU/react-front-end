import axios from 'axios'
const BaseUrl = process.env.REACT_APP_BASEURL

export const post = (url:'', body:{}) => {
  return axios.post(BaseUrl+url,body)
}
export const get = (url:'') => {
  return axios.get(BaseUrl+url)
}
