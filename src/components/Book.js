import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function Book(props) {
  const dispatch = useDispatch();
  const books = { props };
  const eachBook = books.props.book;

  return (
    <li>
      <span>
        <em>{eachBook.title}</em>
        {' '}
        by
        {' '}
        <em>{eachBook.author}</em>
      </span>
      {' '}
      <button
        type="button"
        id={eachBook.item_id}
        onClick={() => {
          dispatch(removeBook(eachBook.item_id));
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default Book;
