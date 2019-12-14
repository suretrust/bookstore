const createBook = (title, category) => ({
  type: 'CREATE_BOOK',
  title,
  category
});

const removeBook = id => ({
  type: 'REMOVE_BOOK',
  id
});

const changeFilter = filter => ({
  type: 'CHANGE_FILTER',
  filter
});


export { createBook, removeBook, changeFilter };
