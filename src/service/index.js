import axios from 'axios'
const BaseUrl = process.env.REACT_APP_BASEURL

const queryString = (queryobject = {}) => {
  let string = ''

  Object.keys(queryobject).forEach((qo, indexObj) => {
    switch(typeof queryobject[qo]) {
    case 'number':
    case 'string':
    case 'boolean':
      string += `&${qo}=${queryobject[qo]}`
      break;
    default:
      if (queryobject[qo].length === 0) {
        // do nothing
      } else {
        if (indexObj < Object.keys(queryobject).length ) {
          string += '&'
        }
        string += `${qo}=`
        queryobject[qo].forEach((data, indexArr) => {
          if (indexArr < queryobject[qo].length ) {
            string += `${data},`
          }else {
            string += `${data}`
          }
        })
      }
      break;
    }
  })

  string = `${string.substring(1)}`;

  return string
}

export const post = ({url='',access_token='', body={}}) => {
  if (access_token === '') {
    return axios.post(BaseUrl+url, body)
  }
  return axios.post(BaseUrl+url+`?access_token=${access_token}`,body)
}
export const get = ({url='', access_token='', query={}}) => {
  console.log(queryString(query));
  return axios.get(BaseUrl+url+'?'+`access_token=${access_token}`+queryString(query))
}
