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
  console.log(note, 'in create')
  return fetch(`${BASE_URL}/edit/${note._id}`, {
    method: 'PUT',
    body: JSON.stringify(note),
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken(),
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
}