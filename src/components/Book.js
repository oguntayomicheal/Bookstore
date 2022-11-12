function Book(props) {
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
      <button type="button">Delete</button>
    </li>
  );
}

export default Book;
