import { createStore } from 'redux';
import reducer from '../reducers';
import getId from '../utilities/getId'

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
  ], 
  filter: 'All'
};

const store = createStore(reducer, initialState);

export default store;
