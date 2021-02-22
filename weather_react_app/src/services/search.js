
import axios from "axios";
export async function getAllSearches(user) {
    debugger
    const headers = {
      'Authorization': 'Bearer my-token',
      'My-Custom-Header': 'foobar',
      'Accept': 'application/json',
      'content-type': 'application/json'
    };
  
      axios.post(`http://localhost:8000/getAllSearches`,user,{ headers })
      .then(response => {
        debugger
        console.log(" user" + (response.data))
        return response.data
      })
      .catch(error => {
        console.error('There was an error!', error);
      });

}
export  async function addSearch(search) {
  debugger
  const headers = {
    'Authorization': 'Bearer my-token',
    'My-Custom-Header': 'foobar',
    'Accept': 'application/json',
    'content-type': 'application/json'
  };
  await axios.post("http://localhost:8000/addSearch", search, { headers })
    .then(response => {
      debugger
      console.log(" search" + (response.data))
      return response.data
    })
    .catch(error => {
      console.error('There was an error!', error);
    });


}