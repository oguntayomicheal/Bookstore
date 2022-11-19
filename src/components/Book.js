import { useDispatch } from 'react-redux';
import { Progress } from 'antd';
import { removeBook } from '../redux/books/books';
import './css/Book.css';

function Book(props) {
  const dispatch = useDispatch();
  const books = { props };
  const eachBook = books.props.book;

  return (
    <li>
      <div className="details">
        <p className="School-of font-style">{eachBook.category}</p>
        <span className="Title font-style">{eachBook.title}</span>
        <br />
        <span className="Author font-style">{eachBook.author}</span>
        <div className="align-flex">
          <button type="button" className="clearBtn font-style">Comment</button>
          <div className="Line-2" />
          <button
            type="button"
            className="clearBtn font-style"
            id={eachBook.item_id}
            onClick={() => {
              dispatch(removeBook(eachBook.item_id));
            }}
          >
            Remove
          </button>
          <div className="Line-2" />
          <button type="button" className="clearBtn">Edit</button>

        </div>

      </div>

      <div className="progress align-flex">
        <Progress
          strokeColor="#0290ff"
          type="circle"
          percent={60}
          className="circle"
          width={60}
          format={() => ''}
        />

        <span className="progress-update">
          <span className="-Percent-Complete font-style">
            64%
          </span>
          <span className="Completed Text-Style-2 font-style">
            Completed
          </span>
        </span>
      </div>

      <div className="Line-3" />
      <div className="update">
        <span className="Current-Chapter font-style">
          Current Chapter
        </span>

        <span className="Current-Lesson Text-Style-4 font-style">
          Chapter 17
        </span>

        <button type="button" className="Rectangle-2">UPDATE PROGRESS</button>

      </div>

    </li>
  );
}

export default Book;
