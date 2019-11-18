import { createStore } from 'redux';
import reducer from '../reducers';

const getId = () => Math.round(Math.random() * 100);

const initialState = {
  books: [
    {
      id: getId(),
      title: 'Bellom',
      category: 'Biography'
    },
    {
      id: getId(),
      title: 'Suretrust',
      category: 'History'
    }
  ]
};

const store = createStore(reducer, initialState);

export default store;
