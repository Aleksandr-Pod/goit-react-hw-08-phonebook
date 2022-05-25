import PropTypes from 'prop-types';

export const Filter = ({filter, setFilter}) => {
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        value={filter}
        onChange={evt => setFilter(evt.currentTarget.value)} />
    </div>
  )
}
Filter.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func
}