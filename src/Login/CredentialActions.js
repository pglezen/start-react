import fetch from 'cross-fetch';
import jwt from 'jsonwebtoken';
import util from 'util';

export const clearToken = () => ({ type: 'CLEAR_TOKEN' });

export const setToken = (token = '', error = '') => {
  const action = {
    type: 'SET_TOKEN',
    token,
    claims: {},
    error
  }
  if (error) {
    action.error = error;
  }
  if (token) {
    const credentials = jwt.decode(token);
    if (credentials) {
      action.claims = credentials;
    } else {
      action.error = 'Failed to decode token';
    }
  }
  return action;
}

export const startSetToken = (id, pw) => {
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id, pw }),
    mode: 'cors',
    timeout: 10000
  }

  const loginUrl = '/login';
  console.log(`Login URL = ${loginUrl}.`);

  return (dispatch) => {
    return fetch(loginUrl, fetchOptions).then(response => {
      console.log(`Login HTTP status: ${response.status}`);
      if (response.ok) {
        return response.json();
      } else {
        return { error: response.status }
      }
    }).then((result) => {
      console.log(`Login response: ${util.inspect(result)}.`);
      dispatch(setToken(result.token));
    }).catch( (error) => {
      console.log(`Login error: ${error}.`);
      dispatch(setToken('', error));
    })
  }
}
