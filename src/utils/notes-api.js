import tokenService from './tokenService';

const BASE_URL = '/api/notes';

export function create(note){
  console.log(note, 'in create')
  return fetch(BASE_URL, {
    method: 'POST',
    body: JSON.stringify(note),
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken(),
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
}

export function getAll() {
  return fetch(BASE_URL, {
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  })
  .then(res => res.json());
}

export function update(note){
  console.log(note, 'in update')
  return fetch(`${BASE_URL}/edit/${note._id}`, {
    method: 'PUT',
    body: JSON.stringify(note),
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken(),
      'Content-Type': 'application/json'
    }
  }).then(res =>{ 
     console.log("THIS IS RES: ", res)
     return res.json()
  })
}

export function deleteOne(noteId){
  return fetch(`${BASE_URL}/delete/${noteId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken() 
    }
  }).then(res =>{
     return res.json()
  })
}