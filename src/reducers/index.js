import { combineReducers } from 'redux';
import ContactsReducer from './ContactsReducer';
import ActiveContactReducer from './reducer_active_contact';

const reducers = combineReducers({
  contacts: ContactsReducer,
  activeContact: ActiveContactReducer
})

export default reducers