import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'Redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const { value: filter } = useSelector(state => state.filter);
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