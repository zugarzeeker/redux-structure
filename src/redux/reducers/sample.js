import { createReducer, utility } from 'redux-modern-crud';

const actions = utility.getActionTypes('user', 'LOGIN');
const reducer = createReducer(actions)
export default { reducer };
