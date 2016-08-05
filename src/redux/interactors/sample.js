import { utility } from 'redux-modern-crud';

const login = data => {
  return {
    types: utility.getActionTypes('user', 'LOGIN'),
    promise: client => client.post('/users/login', { data })
  };
};

const logoff = () => {
  return {
    types: utility.getActionTypes('user', 'LOGOFF'),
    promise: client => client.post('/users/logoff', { data: '' })
  };
};

const verify = () => {
  return {
    types: utility.getActionTypes('user', 'VERIFY'),
    promise: client => client.get('/users/me')
  };
};

const isVerified = globalState => {
  return globalState.userStore && globalState.userStore.verified;
};

export default { login, logoff, verify, isVerified };

const actions = { R, S, F };
const httpRequest = createInteractor(actions);
const login = (data) => httpRequest('get', 'url', data);
const verify = (data) => httpRequest('get', 'url', data);
const logoff = (data) => httpRequest('get', 'url', data);

// ------------------------------------------------------->
const createInteractor = (actions) => {
  const { REQUEST, SUCCESS, FAIL } = actions;
  const httpRequest = (method, url, data) => ({
    types: [REQUEST, SUCCESS, FAIL],
    promise: (client) => client[method](url, { data })
  });
  return httpRequest;
};
