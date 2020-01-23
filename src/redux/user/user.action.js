// import { baseUrl } from '../baseUrl';
// import { UserActionTypes } from './user.types';


// export const setCurrentUser = user => ({
//     type: UserActionTypes.SET_CURRENT_USER,
//     payload: user
// })

// export const postLogin = (phoneEmail, password) => (dispatch) => {
//     const newLogin = {
//         phoneEmail: phoneEmail,
//         password: password
//     };
//     return fetch(baseUrl + '/accounts/rest-auth/login/', {
//         method: "POST",
//         body: JSON.stringify(newLogin),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     })
//     .then(response => {
//         if(response.ok) {
//             return response;
//         } else {
//             var error = new Error('Error' + response.status + ': ' + response.statusText);
//             error.response = response;
//             throw error
//         }
//     },
//      error => {
//          throw error;
//      })
//      .then(response => response.json())
//      .then(response => dispatch(setCurrentUser(response)))
//      .catch(error => { console.log('post login', error.message) })
// }