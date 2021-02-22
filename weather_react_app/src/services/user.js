import axios from 'axios';
import { Redirect, useHistory } from 'react-router-dom';
import SearchesHistory from '../components/searchesHistory';

export async function addUser(user) {
  debugger
  const headers = {
    'Authorization': 'Bearer my-token',
    'My-Custom-Header': 'foobar',
    'Accept': 'application/json',
    'content-type': 'application/json'
  };

  await axios.post(`http://localhost:8000/newUser`, user, { headers })
    // .then(response => response.json())
    .then(response => {
      debugger
      console.log(" user" + (response.data))
      return response.data
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
}


// export function getUser(email, password) {
export async function getUser(user) {
  

  debugger
  const headers = {
    'Authorization': 'Bearer my-token',
    'My-Custom-Header': 'foobar',
    'Accept': 'application/json',
    'content-type': 'application/json'
  };
   await axios.post(`http://localhost:8000/getUser`, user, { headers })
    // .then(response => response.json())
    .then(response => {
      debugger
      const user= response.data.user._id
      console.log(" user"+user)
      return user
      // JSON.stringify(response.data)
    })
    .catch(error => {
      debugger
      console.error('There was an error!', error);
    });
  // return data.json()
}
