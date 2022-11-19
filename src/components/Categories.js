import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import './css/Categories.css';

function Categories() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.categories);
  return (
    <div>
      <button
        type="button"
        className="category-btn"
        onClick={() => {
          dispatch(checkStatus());
        }}
      >
        Check status
      </button>
      <br />
      <span id="my-state">{state}</span>
    </div>
  );
}

export default Categories;
