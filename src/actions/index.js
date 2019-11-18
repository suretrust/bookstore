const createBook = (title, category) => ({
  type: 'CREATE_BOOK',
  title,
  category
});

const removeBook = id => ({
  type: 'REMOVE_BOOK',
  id
});

export { createBook, removeBook };
