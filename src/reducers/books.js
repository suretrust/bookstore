import getId from '../utilities/getId';

const books = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [
        ...state,
        { id: getId(), title: action.title, category: action.category }
      ];

    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.id);

    default:
      break;
  }
  return state;
};

export default books;
