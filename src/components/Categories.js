import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.categories);
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          dispatch(checkStatus());
        }}
      >
        Check status
      </button>
      <br />
      <span>{state}</span>
    </div>
  );
}

export default Categories;
