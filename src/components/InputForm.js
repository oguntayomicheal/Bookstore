import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
import './css/InputForm.css';

const InputForm = () => {
  const dispatch = useDispatch();

  return (
    <div id="form-box">
      <div className="form-line" />
      <span className="Add-book">
        ADD NEW BOOK
      </span>
      <form>
        <input type="text" placeholder="Book title" id="bk-title" required />
        <input type="text" placeholder="Book author" id="bk-author" required />
        <button
          type="submit"
          className="Rectangle-3"
          onClick={(e) => {
            e.preventDefault();
            const bookTitle = document.getElementById('bk-title').value;
            const bookAuthor = document.getElementById('bk-author').value;
            if (bookTitle !== '' && bookAuthor !== '') {
              dispatch(addBook(
                {
                  item_id: uuidv4(),
                  title: bookTitle,
                  author: bookAuthor,
                  category: 'Action',
                },
              ));
              document.getElementById('bk-title').value = '';
              document.getElementById('bk-author').value = '';
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
