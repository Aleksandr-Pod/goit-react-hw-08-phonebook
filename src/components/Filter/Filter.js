import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'Redux/authSlice';

export const Filter = () => {
  const filter = useSelector(state => state.auth.filter);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        value={filter}
        onChange={evt => dispatch(setFilter(evt.currentTarget.value))} />
    </div>
  )
}