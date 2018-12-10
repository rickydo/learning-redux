import { createStore } from 'redux';
import { contacts } from "../static-data";
import someReducer from '../reducers';

const store = createStore(someReducer, {contacts});

export default store;