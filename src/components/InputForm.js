import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const InputForm = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <form>
        <input type="text" placeholder="Title" id="title" required />
        <input type="text" placeholder="Author" id="author" required />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            const bookTitle = document.getElementById('title').value;
            const bookAuthor = document.getElementById('author').value;
            if (bookTitle !== '' && bookAuthor !== '') {
              dispatch(addBook(
                {
                  item_id: uuidv4(),
                  title: bookTitle,
                  author: bookAuthor,
                  category: 'None',
                },
              ));
              document.getElementById('title').value = '';
              document.getElementById('author').value = '';
            }
          }}
        >
          ADD SCORE
        </button>
      </form>

    </div>
  );
};

export default InputForm;
