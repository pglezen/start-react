const defaultState = {
  token: '',
  claims: {},
  error: ''
};

export default (state = defaultState, action) => {
  switch(action.type) {

    case 'SET_TOKEN':
      return ({
        token: action.token,
        claims: action.claims,
        error: action.error
      });

    case 'CLEAR_TOKEN':
      return ({
        token: '',
        claims: {},
        error: ''
      });
    
    default:
      return state;
  }
};