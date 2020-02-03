import axios from 'axios'

export const baseUrl = 'https://wonesupport.com';  

/*
 * Configure axios to automatically add baseUrl and authorization to needed api request
 */

export default () => {
  let token = localStorage.getItem('token')
  if (token) {
    return axios.create({
      baseURL: baseUrl,
      headers: {
        Authorization: 'jwt ' + token
      }
    })
  } else {
    return axios.create({
      baseURL: baseUrl
    })
  }
}


