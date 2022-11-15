// action

const CHECK__STATUS = 'bookstore/src/redux/categories/CHECK__STATUS';

export const checkStatus = () => ({
  type: CHECK__STATUS,
});

// Reducers

export const categories = (state = [], action) => {
  switch (action.type) {
    case CHECK__STATUS:
      return 'Under construction';
    default:
      return state;
  }
};
