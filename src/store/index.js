import { createStore } from 'redux'
import {books} from '../containers/BooksList';

const store = createStore(reducer, {books});

export default store;
