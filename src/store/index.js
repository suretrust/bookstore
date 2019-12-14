import { createStore } from 'redux';
import reducer from '../reducers';
import getId from '../utilities/getId'

const initialState = {
  books: [
    {
      id: getId(),
      title: 'Bellom Sean',
      category: 'Biography'
    },
    {
      id: getId(),
      title: 'Suretrust Kayrode',
      category: 'History'
    }
  ], 
  filter: 'All'
};

const store = createStore(reducer, initialState);

export default store;
